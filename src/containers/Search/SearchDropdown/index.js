import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import Dropdown from "./Dropdown";



const DropdownList = () => {

    const [LineNum, setLineNum] = useState(0);

    const [Line, setLine] = useState([]);

    //const addLine = <Dropdown key={LineNum} lineNum={LineNum} addDropdown={addDropdown} removeDropdown={removeDropdown} />;

    
    const addDropdown = () => {
        console.log('before add='+LineNum);
        setLineNum(LineNum + 1);
        setLine([...Line, <Dropdown key={LineNum} lineNum={LineNum} addDropdown={addDropdown} removeDropdown={removeDropdown} />]);
        //setLine([...Line, addLine])
    };

    //const  ii = (ele) =>{
      //  console.log(ele.key);
       // return ele.key != lineNum; 
   // }
    
    const removeDropdown = (nn) => {
        console.log('linenum='+nn);
        const newLine = Line.filter(l => true);
        //const newLine = Line.filter(ii);
        console.log('show the lines')
        console.log(newLine);
        setLine(newLine);
        setLineNum(newLine.length);
    };
    

    console.log('all_lines = '+LineNum);
    console.log(Line);


    return (
        <Grid item xs={12}>
            <Dropdown lineNum={0} addDropdown={addDropdown} removeDropdown={removeDropdown} />
            {Line}
        </Grid>
    )
};

export default DropdownList;