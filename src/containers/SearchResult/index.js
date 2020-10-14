import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent,Button,  Typography, Grid}from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minWidth: 275,
  },
  content: {
    flex: '1 0 auto',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SearchResult = () => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <Grid item xs={3} >
            <CardContent className={classes.content} >
                <Typography variant="h5" component="h2">
                Title
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                keyword
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                Abstract
                <br />
                {'"a benevolent smile"'}
                </Typography>
                <CardActions>
                    <Button size="small">Add comment</Button>
                </CardActions>
            </CardContent>
        </Grid>
        <Grid item xs={9} >
            <CardContent className={classes.content} >
                <Typography variant="h5" component="h2">
                    Title
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                keyword
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Grid>
    </Card>
  );
}

export default SearchResult;