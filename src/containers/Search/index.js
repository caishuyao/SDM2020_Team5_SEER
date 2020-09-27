import React, {useState} from 'react';
import { Grid, TextField, MenuItem, Button } from '@material-ui/core';
import './Search.css';

function Search() {

    const [SearchKeyword, setSearchKeyword] = useState("");
    const handleSearchKeywordChange = (s) => {
        setSearchKeyword(s);
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
        <div className="SearchBarContainer" >
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Keyword"
                        variant="outlined"
                        error={HasFocus && SearchKeyword === ""}
                        onClick={() => setHasFocus(true)}
                        value={SearchKeyword}
                        onChange={e => handleSearchKeywordChange(e.target.value)}
                    />
                </Grid>
                {/* <Grid item xs={6} sm={3}>
                    <TextField
                        type="number"
                        id="outlined-required"
                        label="Year"
                        variant="outlined"
                        onClick={() => setHasFocus(true)}
                    />
                </Grid> */}
                <Grid item xs={3} sm={3} className="SearchButton">
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
};

export default Search;