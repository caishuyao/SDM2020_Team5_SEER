import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CustomSlider from "components/CustomSlider/CustomSlider.js";
import DatePicker from "components/Datepicker/Datepicker";
import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Slider from '@material-ui/core/Slider';

import { LibDB, Practices, Claims } from "variables/general";
import { metaEvidences } from "variables/charts.js";
import { fetchArticles } from "utils/article.util";

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

const curYear = 1900+(new Date().getYear());
const minYear = 1980;
const useStyles = makeStyles(styles);

export default function Search()  {
  const classes = useStyles();

  const [period, setPeriod] = useState(5);
  const [claims, setClaims] = useState([]);
  const [beginYear, setBeginYear] = useState(2020);
  const [endYear, setEndYear] = useState(2015);
  const [list, setList] = useState([]);
  const [post, setPost] = useState({});

  const handleRangeChange = (event, newValue) => {
    console.log(newValue);
    setBeginYear(newValue[0]);
    setEndYear(newValue[1]);
  };

  const handleChange = (event) =>{
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setPost(Object.assign({},post,{[name]:value}));
    console.log(["name=",name,"value=",value]);
    if(name === "practice"){
      setClaims(value===undefined ? []: Claims[value]);
    }else if(name === "beginYear"){
      setBeginYear(value);
    }else if(name === "endYear"){
      setEndYear(value);
    }
  };

  const  handleSubmit = async e => {
    var result = await fetchArticles(post);
    setList(result);
  };
/*
 useEffect(() => {
    setBeginYear(2020);
    setEndYear(beginYear-period);

  }, []);
 */


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
                <CustomSelect
                  labelText="Practice"
                  id="practice"
                  onChange={handleChange}
                  value=""
                  data={Practices}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomSelect
                  labelText="Claims"
                  id="claims"
                  onChange={handleChange}
                  value=""
                  data={claims}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Begin Year"
                  id="beginYear"
                  value={beginYear}
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="End Year"
                  id="endYear"
                  value={endYear}
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Slider
                value={[beginYear, endYear]}
                onChange={handleRangeChange}
                aria-labelledby="range-slider"
                valueLabelDisplay="auto"
                min={minYear}
                max={curYear}
              />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter >
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
