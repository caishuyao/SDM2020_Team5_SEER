import React from "react";

import CardBody from "components/Card/CardBody";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

import PropTypes from "prop-types";

export default function CardDetail(props) {
  const data = props.cardDetail;
  const index = {no:0,author:1,title:2,year:3,doi:4,practice:5,claims:6,sr_text:7,sr_number:8,abstract:9};
  return (
    <CardBody>
      <Typography variant="h5" component="h2" gutterBottom>
        {data[index.title]}
      </Typography>
      <Chip
        avatar={<Avatar>SE</Avatar>}
        label={data[index.practice]}
        color="primary"
        id="practice"
        name="practice"
      />
      <Typography variant="h6" component="h2" gutterBottom>
        Support Rating:
        {data[index.sr_text]}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Author:
        {data[index.author]}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Published Year:
        {data[index.year]}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        DOI:{" "}
        <a
          href={`https://doi.org/${data[index.doi]}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {data[index.doi]}
        </a>
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Abstract:
        {data[index.abstract]}
      </Typography>
    </CardBody>
  );
}

CardDetail.propTypes = {
  cardDetail: PropTypes.any,
};
