import React, {Component} from 'react';
import { Grid, Cell,Card,CardText,CardTitle,CardActions, Button, CardMenu, IconButton } from 'react-mdl';
  

class Home extends Component {
    render()
    {
        return (
        <div style ={{width:'100%',margin: 'auto'}} >
            <body>
           <Grid className="landing-grid">
               <Cell col={12}>
               <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Welcome to SEER Site.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
               </Cell>
           </Grid>
           </body>
        </div>
        )
    }
}
export default Home;