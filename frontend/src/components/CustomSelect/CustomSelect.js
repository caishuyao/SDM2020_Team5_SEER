import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { Select, MenuItem } from "@material-ui/core";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/material-dashboard-react/components/customInputStyle.js";
import getType from "../../utils/util";

const useStyles = makeStyles(styles);

export default function CustomSelect(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    name,
    value,
    onChange,
    inputProps,
    labelProps,
    data,
    error,
    success,
  } = props;

  const labelClasses = classNames({
    [` ${classes.labelRootError}`]: error,
    [` ${classes.labelRootSuccess}`]: success && !error,
  });

  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  });

  const list = Array.isArray(data)
    ? data.map((row) => [row.value, row.name])
    : getType(data) === "map"
    ? Array.from(data)
    : [];

  return (
    <FormControl
      {...formControlProps}
      className={`${formControlProps.className} ${classes.formControl}`}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Select
        classes={{
          root: marginTop,
          disabled: classes.disabled,
        }}
        id={id}
        name={name || id}
        value={value}
        onChange={onChange}
        {...inputProps}
      >
        {list.map((item, index) => (
          <MenuItem key={index} value={item[0]}>
            {item[1]}
          </MenuItem>
        ))}
      </Select>
      {error ? (
        <Clear className={`${classes.feedback} ${classes.labelRootError}`} />
      ) : success ? (
        <Check className={`${classes.feedback} ${classes.labelRootSuccess}`} />
      ) : null}
    </FormControl>
  );
}

CustomSelect.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  data: PropTypes.any,
  /**
   * data support two format i
   * 1: Array:  [{key:'',vaue:''},....]
   * 2: Map: [[key,value],...]
   */
  error: PropTypes.bool,
  success: PropTypes.bool,
};
