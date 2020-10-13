import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button, Container, Radio, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import DropdownList from "./SearchDropdown";
import SearchResult from '../SearchResult';
import './Search.css';
import { set } from 'mongoose';

const methods = ['TDD', 'Agile'];

function Search() {
    const [selectMethod, setSelectMethod] = useState();

    const handleSelectMethodChange = (s) => {
        setSelectMethod(s);
        setSelectClaims();
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

    let claims = [''];
    const tddClaims = ['bad', 'good'];
    const agileClaims = ['what', 'nice'];
    if (selectMethod === "TDD"){ claims = tddClaims};
    if (selectMethod === "Agile"){ claims = agileClaims};

    const handleSubmit = () => {
        if (selectMethod && selectClaims && startYear && endYear ) {
            let UserInput = {
                selectMethod: selectMethod,
                selectClaims: selectClaims,
                startYear: startYear,
                endYear: endYear
            }
            // props.SetUserInput(UserInput);
            console.log(UserInput);
        } else {
            setHasFocus(true);
        }
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
                        {methods.map(method => { return <MenuItem key={method} value={method}>{method}</MenuItem> })}
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
                        {claims.map(claim => { return <MenuItem key={claim} value={claim}>{claim}</MenuItem> })}
                    </TextField>
                </Grid>
                <Grid item xs={4} id="StartYear" >
                    <FormLabel >Year from: </FormLabel>
                    <TextField
                        required
                        type="number"
                        InputProps={{ inputProps: { min: 1990, max: nowYear } }}
                        id="StartYear"
                        variant="outlined"
                        className="YearItem"
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
                        InputProps={{ inputProps: { min: 1990, max: nowYear } }}
                        id="EndYear"
                        variant="outlined"
                        className="YearItem"
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