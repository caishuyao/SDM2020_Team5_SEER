import React from "react";

import CardBody from "components/Card/CardBody";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

export default function CardDetail(props) {
    const data = props.cardDetail;
    return (
        <CardBody>
            <Typography variant="h5" component="h2" gutterBottom>
                {data[2]}
            </Typography>
            <Chip avatar={<Avatar>SE</Avatar>}
                  label={data[5]}
                  color="primary"
                  id="practice"
                  name="practice"
                />
            <Typography variant="h6" component="h2" gutterBottom>Claims: {data[6]}</Typography>
            <Typography variant="h6" component="h2" gutterBottom>Support Rating: {data[7]}</Typography>
            <Typography variant="h6" component="h2" gutterBottom>Author: {data[1]}</Typography>
            <Typography variant="h6" component="h2" gutterBottom>Published Year: {data[3]}</Typography>
            <Typography variant="h6" component="h2" gutterBottom>
                DOI: <a href={"https://doi.org/" + data[4]} target="_blank" rel="noopener noreferrer">{data[4]}</a>
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>Abstract:<br/>{data[8]}</Typography>
        </CardBody>
    )
};
