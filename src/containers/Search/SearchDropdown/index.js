import React from 'react';
import { Grid } from '@material-ui/core';
import Dropdown from "./Dropdown";
import SearchState from "./SearchState"


const DropdownList = () => {
    //const [Line,setLine] = useState([]);
    const {Lines, addDropdown, removeDropdown} = SearchState([{key:0}]);
    return (
        <Grid item xs={12}>
            {Lines.map((line, index) => (
             <Dropdown lineNum={index} addDropdown={addDropdown} removeDropdown={removeDropdown} />
             ))}          
        </Grid>
    )
};

export default DropdownList;