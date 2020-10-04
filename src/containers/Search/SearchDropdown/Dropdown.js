import React from "react";
import { InputLabel, Button, Select, MenuItem, TextField, Grid } from "@material-ui/core";

const Dropdown = props => {
  
    return (
      <Grid container spacing={2} >
        <Grid item xs={1}>
          <InputLabel>If</InputLabel>
        </Grid>
        <Grid item xs={3}>
          <Select fullWidth displayEmpty>
            <MenuItem disabled>Name of field</MenuItem>
            <MenuItem value={'Title'}>Title</MenuItem>
            <MenuItem value={'Author'}>Author</MenuItem>
            <MenuItem value={'Method'}>Method</MenuItem>
            <MenuItem value={'Benefit'}>Benefit</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <Select fullWidth displayEmpty>
            <MenuItem disabled>operator</MenuItem>
            <MenuItem value={'contains'}>contains</MenuItem>
            <MenuItem value={'does not contain'}>does not contain</MenuItem>
            <MenuItem value={'begins with'}>begins with</MenuItem>
            <MenuItem value={'ends with'}>ends with</MenuItem>
            <MenuItem value={'is equal to'}>is equal to</MenuItem>
            <MenuItem value={'is less than'}>is less than</MenuItem>
            <MenuItem value={'is less than or equal to'}>is less than or equal to</MenuItem>
            <MenuItem value={'is more than'}>is more than</MenuItem>
            <MenuItem value={'is more than or equal to'}>is more than or equal to</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <TextField fullWidth></TextField>
        </Grid>
        <Grid item xs={2}>
          <Select fullWidth defaultValue={'OR'}>
            <MenuItem value={'AND'}>AND</MenuItem>
            <MenuItem selected value={'OR'}>OR</MenuItem>
            <MenuItem value={'AND NOT'}>AND NOT</MenuItem>
            <MenuItem value={'OR NOT'}>OR NOT</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={props.addDropdown}>+</Button>
          <Button onClick={() => props.removeDropdown(props.lineNum)}>-</Button>
        </Grid>
      </Grid>
    )
  };

export default Dropdown;