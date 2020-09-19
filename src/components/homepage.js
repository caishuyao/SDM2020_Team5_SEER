import React, {Component} from 'react';
import { Grid, Cell,Card,CardTitle,CardActions, Button, CardMenu, IconButton } from 'react-mdl';
  
class Home extends Component
{
    render()
    {
        return (
        <div style ={{width:'100%',margin: 'auto'}} >
           <Grid className="landing-grid">
               <Cell col={12}>
              <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                  <CardTitle style ={{color:'#fff',height:'175px',background:'url() center/cover'}}> Your Search End's Here</CardTitle>
              </Card>






               </Cell>
           </Grid>

        </div>
        )
    }
}
export default Home;