import React, {Component} from 'react';
import { Container } from 'react-bootstrap';

import{Navbar,Nav,NavDropdown,Button,Jumbotron,FormControl,FormGroup,Form,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Main from '../main';



class Header extends Component
{
    render()
    {
        return (
 <div>
  
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
 <Navbar.Brand href="#home"><Link to="/">SEER</Link></Navbar.Brand>
 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 <Navbar.Collapse id="responsive-navbar-nav">
   <Nav className="mr-auto">
     <Nav.Link href="#"><Link to="/analyst">Analyst</Link></Nav.Link>
     <Nav.Link href="#"><Link to="/searcher">Searcher</Link></Nav.Link>
     <Nav.Link href="#"> <Link to="/submitter">Submitter</Link></Nav.Link>
     <Nav.Link href="#"><Link to="/moderator">Moderator</Link></Nav.Link>
   </Nav>
   <Nav>
     <Nav.Link href="#"><Link to="/login">Login</Link></Nav.Link>
     <Nav.Link eventKey={2} href="#">
       <Link to="/register">Register</Link>
     </Nav.Link>
   </Nav>
 </Navbar.Collapse>
</Navbar>
<Container>
 <Row>
  
 
 <Col><Main/></Col>
  
 </Row>
 

</Container>
 
</div>)
    }
}
export default Header;