import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button, Container, Radio, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import DropdownList from "./SearchDropdown";
import SearchResult from '../SearchResult';
import './Search.css';
import { set } from 'mongoose';

function Search() {
    const [selectMethod, setSelectMethod] = useState();
    const handleSelectMethodChange = (s) => {
        setSelectMethod(s);
    };

    const [selectClaims, setSelectClaims] = useState();
    const handleSelectClaimsChange = (s) => {
        setSelectClaims(s);
    };

    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();

    const [startYear, setStartYear] = useState();
    const handleStartYear = (s) => {
        setStartYear(s);
    };

    const [endYear, setEndYear] = useState();
    const handleEndYear = (s) => {
        setEndYear(s);
    };

    const handleFiveRadio = () => {
        setEndYear(nowYear);
        setStartYear(nowYear - 5);
    }

    const handleTenRadio = () => {
        setEndYear(nowYear);
        setStartYear(nowYear - 10);
    }

    const [HasFocus, setHasFocus] = useState(false);

    const handleSubmit = () => {

        console.log(selectMethod, selectClaims, startYear, endYear);

        // if (SearchTitle?.length !== 0 && SearchTitle !== null && SearchTitle !== "") {
        //     let UserInput: IUserInput = {
        //         SearchTitle: SearchTitle,
        //         SearchYear: SearchYear,
        //         SearchType: SearchType,
        //     }
        //     props.SetUserInput(UserInput);
        // } else {
        //     setHasFocus(true);
        // }
    }

    return (
        <Container className="SearchBarContainer">
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <TextField
                        select
                        id="sdm"
                        label="Software Development Method"
                        variant="standard"
                        className="MenuItem"
                        onClick={() => setHasFocus(true)}
                        value={selectMethod}
                        onChange={e => handleSelectMethodChange(e.target.value)}
                    >
                        <MenuItem value="" >
                            <em>Please select one method.</em>
                        </MenuItem>
                        {[...Array(30).keys()].map(i => { return <MenuItem key={i} value={2020 - i}>{2020 - i}</MenuItem> })}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        multiple
                        id="SDM Claims"
                        label="Claims"
                        variant="standard"
                        className="MenuItem"
                        onClick={() => setHasFocus(true)}
                        value={selectClaims}
                        onChange={e => handleSelectClaimsChange(e.target.value)}
                    >
                        <MenuItem value="" >
                            <em>Please select at least one claim.</em>
                        </MenuItem>
                        {[...Array(30).keys()].map(i => { return <MenuItem key={i} value={2020 - i}>{2020 - i}</MenuItem> })}
                    </TextField>
                </Grid>
                <Grid item xs={4} id="StartYear" >
                    <FormLabel >Year from: </FormLabel>
                    <TextField
                        required
                        type="number"
                        id="StartYear"
                        variant="outlined"
                        error={HasFocus && startYear === ""}
                        onClick={() => setHasFocus(true)}
                        value={startYear}
                        onChange={e => handleStartYear(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4} id="StartYear">
                    <FormLabel>Year to: </FormLabel>
                    <TextField
                        required
                        type="number"
                        id="EndYear"
                        variant="outlined"
                        error={HasFocus && endYear === ""}
                        onClick={() => setHasFocus(true)}
                        value={endYear}
                        onChange={e => handleEndYear(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <RadioGroup aria-label="yearRange" name="yearRange" >
                        <FormControlLabel value="5" control={<Radio color="default" />} label="Search by last five years" onChange={handleFiveRadio} />
                        <FormControlLabel value="10" control={<Radio color="default" />} label="Search by last ten years" onChange={handleTenRadio} />
                    </RadioGroup>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Search
                    </Button>
                </Grid>
            </Grid>
            <p hidden>software development method</p>
            <div className="SearchBarContainer" ><SearchResult /></div>
        </Container>
    )
};

export default Search;