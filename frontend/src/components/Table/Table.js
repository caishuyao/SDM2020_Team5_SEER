import React, { useState } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import SortIcon from "@material-ui/icons/Sort";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import CustomSelect from "components/CustomSelect/CustomSelect";
import CustomDialog from "components/CustomDialog/CustomDialog";
<<<<<<< HEAD
import Card from "components/Card/Card.js";
import CardDetail from "components/Card/CardDetail";
import GridContainer from "components/Grid/GridContainer";
//common variables
=======
import Card from "components/Card/Card";
import CardDetail from "components/Card/CardDetail";
// common variables
>>>>>>> sort-option-beauty
import { sortOption } from "variables/general";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const col_year = 3;
  const col_sr_number = 8;
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  const [orderBy, setOrderBy] = useState();
  const [tableSorted, setTableSorted] = useState([]);
  const [open, setOpen] = useState(false);
  const [cardDetail, setCardDetail] = useState();

  const handleSort = (e) => {
    const { value } = e.target;
    setOrderBy(value);
    console.log(tableSorted);
    switch (value) {
      case "1":
        setTableSorted(tableData.sort((a, b) => b[col_year] - a[col_year]));
        break;
      case "2":
        setTableSorted(tableData.sort((a, b) => a[col_year] - b[col_year]));
        break;
      case "3":
        setTableSorted(
          tableData.sort((a, b) => b[col_sr_number] - a[col_sr_number])
        );
        break;
      case "4":
        setTableSorted(
          tableData.sort((a, b) => a[col_sr_number] - b[col_sr_number])
        );
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

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setTableSorted(tableData);
  }, [tableData]);

  return (
    <div>
      <CustomDialog title="Report Detail" open={open} onClose={handleClose}>
        <Card>
          <CardDetail cardDetail={cardDetail} />
        </Card>
      </CustomDialog>
      <GridContainer spacing={1} alignItems="flex-end">
        <GridItem>
          <SortIcon />
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
          <CustomSelect
            labelText="Sort by"
            id="orderby"
            data={sortOption}
            value={orderBy || ""}
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
            <TableHead className={classes[`${tableHeaderColor}TableHeader`]}>
              <TableRow className={classes.tableHeadRow}>
                {tableHead.map((prop, key) => (
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableSorted.map((row, key) => (
              <TableRow
                key={key}
                className={classes.tableBodyRow}
                onClick={() => handleClickOpen(row)}
              >
                {row.map((col, index) =>
                  index < tableHead.length ? (
                    <TableCell className={classes.tableCell} key={index}>
                      {col}
                    </TableCell>
                  ) : null
                )}
              </TableRow>
            ))}
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
