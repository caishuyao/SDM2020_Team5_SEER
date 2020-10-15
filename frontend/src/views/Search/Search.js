import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import CustomInput from "components/CustomInput/CustomInput";
import CustomSelect from "components/CustomSelect/CustomSelect";
import CustomMulSel from "components/CustomSelect/CustomMulSel";
import CustomSlider from "components/CustomSlider/CustomSlider";
import DatePicker from "components/Datepicker/Datepicker";
import Button from "components/CustomButtons/Button";
import Table from "components/Table/Table";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Slider from "@material-ui/core/Slider";
import TextField from '@material-ui/core/TextField';
import { LibDB, Practices, Claims } from "variables/general";
import { metaEvidences } from "variables/charts";
import { fetchArticles } from "utils/article.util";
import { validateLocaleAndSetLanguage } from "typescript";

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

  const [sp, setSP] = useState(5);
  const [claims, setClaims] = useState([]);
  const [claimsList, setClaimsList] = useState([]);
  const [beginYear, setBeginYear] = useState(curYear-4);
  const [endYear, setEndYear] = useState(curYear);
  const [list, setList] = useState([]);
  const [post, setPost] = useState({});

  const handleRangeChange = (event, newValue) => {
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
      setSP(value===undefined?"":value);
      setClaimsList(value===undefined ? []: Claims[value]);
    }else if(name === "claims"){
      setClaims(value);
    }else if(name === "beginYear"){
      setBeginYear(value);
    }else if(name === "endYear"){
      setEndYear(value);
    }
  };
  const validate = (e)=>{
    console.log(e);
    var value = e.target.value;
    if(value<minYear){
      e.target.value=minYear;
    }
  }

  const quickYear0 = () =>{
      setBeginYear(curYear);
      setEndYear(curYear);
    };
  const quickYear5 = () =>{
      setBeginYear(curYear-4);
      setEndYear(curYear);
    };
  const quickYear10 = () =>{
      setBeginYear(curYear-9);
      setEndYear(curYear);
    };
  const  handleSubmit = async e => {
    var result = await fetchArticles(post);
    setList(result);
  };
  const getPost = ()=>{
    return  {'practice':sp,
             'claims':'',
             'dataPublished':{$gte:beginYear,$lt:endYear}
    }
  }
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
                  data={claims}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <TextField
                   id="beginYear"
                   name="beginYear"
                   label="Begin Year"
                   type="number"
                   value={beginYear}
                   onChange = {handleChange}
                   InputLabelProps={{
                     shrink: true,
                   }}
                 />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                 <TextField
                   id="endYear"
                   name="endYear"
                   label="End Year"
                   type="number"
                   value={endYear}
                   onChange = {handleChange}
                   InputLabelProps={{
                     shrink: true,
                   }}
                 />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <Chip avatar={<Avatar>T</Avatar>}
                      label="  This    Year  "
                      clickable
                      color="primary"
                      id="btnThisYear"
                      name="btnThisYear"
                      onClick={quickYear0}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                 <Chip avatar={<Avatar>5</Avatar>}
                      label="  Last  5  Years  "
                      clickable
                      color="primary"
                      id="btnLast5Years"
                      name="btnLast5Years"
                      onClick={quickYear5}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <Chip avatar={<Avatar>10</Avatar>}
                      label="  Last  10  Years  "
                      clickable
                      color="primary"
                      id="btnLast10Years"
                      name="btnLast10Years"
                      onClick={quickYear10}
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
            <Button color="primary" onClick={handleSubmit} > Search </Button>
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
