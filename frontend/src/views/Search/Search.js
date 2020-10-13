import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import DatePicker from "components/Datepicker/Datepicker";
import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

//import backend from "variables/general";
import { LibDB } from "variables/general";
import { metaEvidences } from "variables/charts.js";
import fetchArticles from "utils/article.util";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};


const useStyles = makeStyles(styles);

export default function Search()  {
  const classes = useStyles();

  const [list, setList] = useState([]);
  const [post, setPost] = useState({});

  const handleChange = (event) =>{
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setPost(Object.assign({},post,{[name]:value}));
  };

  const  handleSubmit = async e => {
    console.log(post);
    e.preventDefault();
    var result = fetchArticles(post);
  console.log(result);
    setList(result);

  };
 
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Finding all evidence you need</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Claims"
                  id="claims"
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    disabled: false,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomSelect
                  labelText="Catolog"
                  id="catolog"
                  onChange={handleChange}
                  data={LibDB}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <DatePicker
                  labelText="Published date"
                  id="datePublished"
                  onChange={handleChange}
                  type="date"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={5}>
                <CustomSelect
                  labelText="Source database"
                  id="sourcedb"
                  onChange={handleChange}
                  data={LibDB}
                  defaultValue="ACM"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button type="submit" color="primary" onClick={handleSubmit} > Search </Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}> Results </h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={metaEvidences.head}
              tableData={list}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
