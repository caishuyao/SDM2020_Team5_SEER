import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CustomDialog from "components/CustomDialog/CustomDialog";
import DatePicker from "components/Datepicker/Datepicker";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/reactlogo.png";
import { LibDB, Practices, Claims, SupportRate } from "variables/general";
import { postArticles } from "utils/article.util";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function SubmitClaim() {
  const classes = useStyles();

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [yearPublished, setYearPublished] = useState();
  const [sourcedb, setSourcedb] = useState("ACM");
  const [practice, setPractice] = useState("");
  const [claims, setClaims] = useState([]);
  const [doi, setDoi] = useState();
  const [abstract, setAbstract] = useState("");
  const [supportRate, setSupportRate] = useState();
  const [claimsList, setClaimsList] = useState([]);

  const [post, setPost] = useState({});
  // const [claims, setClaims] = useState([]);

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    switch (name) {
      case "practice":
        setPractice(value === undefined ? "" : value);
        setClaimsList(value === undefined ? [] : Claims[value]);
        break;
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "yearPublished":
        setYearPublished(value);
        break;
      case "sourcedb":
        setSourcedb(value === undefined ? "" : value);
        break;
      case "claims":
        setClaims(value === undefined ? [] :[value]);
        break;
      case "doi":
        setDoi(value);
        break;
      case "abstract":
        setAbstract(value);
        break;
      case "supportRating":
        setSupportRate(value === undefined ? "" : value);
        break;
    }
  };

  const handleSubmit = async e => {
    var post = getPost();
    console.log(post);
    postArticles(post).then((result)=>{
      setMessage(result);
      setOpen(true);
    });
  
  };

  const getPost = () => {
    return {
      'title': title,
      'author': author,
      'yearPublished': yearPublished,
      'sourcedb': sourcedb,
      'practice': practice,
      'claims': claims,
      'doi': doi,
      'abstract': abstract,
      'supportRating': supportRate,
    }
  }

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
  };


  return (
    <div>
      <CustomDialog title="Submit Result" open={open} onClose={handleClose} >
        <Card>
          <CardHeader color={message.retCode===0?"primary":"danger"}>
            <h4 className={classes.cardTitleWhite}>{message.retMsg}</h4>
          </CardHeader>
        </Card>
      </CustomDialog>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Submit evidence</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Title"
                    id="title"
                    onChange={handleChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: false,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Author"
                    id="author"
                    onChange={handleChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    id="yearPublished"
                    labelText="Published Year"
                    type="number"
                    onChange={handleChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomSelect
                    labelText="Source database"
                    id="sourcedb"
                    data={LibDB}
                    value={sourcedb||"ACM"}
                    onChange={handleChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomSelect
                    labelText="Practice"
                    id="practice"
                    value={practice||""}
                    onChange={handleChange}
                    data={Practices}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <CustomSelect
                    labelText="Claims"
                    id="claims"
                    value={claims===undefined?"":claims.join(",")}
                    onChange={handleChange}
                    data={claimsList}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    labelText="DOI"
                    id="doi"
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
                    labelText="Support Rating"
                    id="supportRating"
                    onChange={handleChange}
                    data={SupportRate}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Abstract</InputLabel>
                  <CustomInput
                    labelText="input the abstract of the evidence."
                    id="abstract"
                    onChange={handleChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 10,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleSubmit}>Submit</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Tips for Submit</h6>
              <h4 className={classes.cardTitle}>Patrick</h4>
              <p className={classes.description}>
                Give me convincing evidence, not just stories Software engineers
                use different practices and ways of working often based on the
                claimed benefits of other practitioners or consultants. I am
                trying to help software engineers to understand the basis of
                these claimed benefits and what empirical evidence there is for
                the different claims.
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
