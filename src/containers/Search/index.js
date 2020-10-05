import React, {useState} from 'react';
import { Grid, TextField, MenuItem, Button, Container } from '@material-ui/core';
import DropdownList from "./SearchDropdown";
import './Search.css';

function Search() {

    const [SearchKeyword, setSearchKeyword] = useState("");
    const handleSearchKeywordChange = (s) => {
        setSearchKeyword(s);
    };

    const [FromYear, setFromYear] = useState("");
    const handleFromYearChange = (s) => {
        setFromYear(s);
    };

    const [ToYear, setToYear] = useState("");
    const handleToYearChange = (s) => {
        setToYear(s);
    };

    const [HasFocus, setHasFocus] = useState(false);

    const handleSubmit = () => {
        console.log(SearchKeyword);

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
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <TextField  fullWidth
                        required
                        id="outlined-required"
                        label="Keyword"
                        variant="outlined"
                        className="MenuItem"
                        error={HasFocus && SearchKeyword === ""}
                        onClick={() => setHasFocus(true)}
                        value={SearchKeyword}
                        onChange={e => handleSearchKeywordChange(e.target.value)}                        
                    />
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        select
                        id="outlined-required"
                        label="From Year"
                        variant="standard"
                        className="MenuItem"
                        onClick={() => setHasFocus(true)}
                        value={FromYear}
                        onChange={e => handleFromYearChange(e.target.value)}
                    >
                        <MenuItem value="" >
                            <em>Please select the year.</em>
                        </MenuItem>
                        {[...Array(30).keys()].map(i => { return <MenuItem key={i} value={2020-i}>{2020-i}</MenuItem> })}
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        select
                        id="outlined-required"
                        label="To Year"
                        variant="standard"
                        className="MenuItem"
                        onClick={() => setHasFocus(true)}
                        value={ToYear}
                        onChange={e => handleToYearChange(e.target.value)}
                    >
                        <MenuItem value="" >
                            <em>Please select the year.</em>
                        </MenuItem>
                        {[...Array(30).keys()].map(i => { return <MenuItem key={i} value={2020-i}>{2020-i}</MenuItem> })}
                    </TextField>
                </Grid>
                <Grid item xs={3} >
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Search
                    </Button>
                </Grid>
                <DropdownList/>
            </Grid>
        </Container>
        // <div className="SearchBarContainer" >
            
        // </div>
    )
};

export default Search;