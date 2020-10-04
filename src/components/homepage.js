import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import{Navbar,Nav,NavDropdown,Button,Jumbotron,FormControl,FormGroup,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';

class Home extends Component {
    render()
    {
        return (
        <div>
            <Container>

  <Row><Col><Jumbotron>
  <p>
  <div>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Search"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
   
    <InputGroup.Append>
      <Button as="input" type="submit" value="Submit" ></Button>
    </InputGroup.Append>
  </InputGroup>
  <Form>
  <Form.Group controlId="formBasicRange">
    <Form.Label> Date Range</Form.Label>
    <Form.Control type="range" />
  </Form.Group>
</Form>
  </div>
  </p>
  <p>

  </p>
</Jumbotron></Col></Row>

<Row><Col><Jumbotron>
  <h3>Welcome to our SEER</h3>
  <p>
 Display number of articles, year of articles, and author of articles.
  </p>
  <p>
   //cards here
  </p>
</Jumbotron></Col></Row>

</Container>
  
</div>
       
        )
    }
}
export default Home;