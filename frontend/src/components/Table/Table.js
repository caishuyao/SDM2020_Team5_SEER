import React, { useState } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import SortIcon from '@material-ui/icons/Sort';
import GridItem from "components/Grid/GridItem.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CustomDialog from "components/CustomDialog/CustomDialog";
import Card from "components/Card/Card.js";
import CardDetail from "components/Card/CardDetail";
import GridContainer from "components/Grid/GridContainer";
//common variables
import { sortOption } from "variables/general";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";


const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  const [orderBy, setOrderBy] = useState();
  const [tableSorted, setTableSorted] = useState([]);
  const [open, setOpen] = useState(false);
  const [cardDetail, setCardDetail] = useState();

  const handleSort = (e) => {
    const value = e.target.value;
    setOrderBy(value);
    console.log(tableSorted);
    switch (value){
      case '1':
        setTableSorted(tableData.sort((a, b)=>a[3]-b[3]));
      break;
      case '2':
        setTableSorted(tableData.sort((a, b)=>b[3]-a[3]));
      break;
      case '3':
        setTableSorted(tableData.sort((a, b)=>a[7]-b[7]));
      break;
      case '4':
        setTableSorted(tableData.sort((a, b)=>b[7]-a[7]));
      break;
      default:
        setTableSorted(tableData);
      break;
    }
  };

  const handleClickOpen = (prop) => {
    setOpen(true);
    setCardDetail(prop);
  };

  const handleClose = value => {
    setOpen(false);
  };

  React.useEffect(()=>{
    setTableSorted(tableData);
  },[tableData]);

  return (
    <div>
      <CustomDialog title="Report Detail" open={open} onClose={handleClose} >
        <Card>
          <CardDetail cardDetail={cardDetail} />
        </Card>
      </CustomDialog>
      <GridContainer>
      <GridItem xs={1}>
      <SortIcon />
      </GridItem>
      <GridItem xs={6} sm={4}>
        <CustomSelect
          labelText="Sort by"
          id="orderby"
          data={sortOption}
          value={orderBy||""}
          onChange={handleSort}
          formControlProps={{
            fullWidth: true,
          }}
        />
      </GridItem>
      </GridContainer>
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow className={classes.tableHeadRow}>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={classes.tableCell + " " + classes.tableHeadCell}
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableSorted.map((prop, key) => {
              return (
                <TableRow key={key} className={classes.tableBodyRow} onClick={()=>handleClickOpen(prop)} >
                  {prop.map((prop, key) => {
                    return (
                      <TableCell className={classes.tableCell} key={key}>
                        {prop}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
