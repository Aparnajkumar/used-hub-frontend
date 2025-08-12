import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';


function Header() {
  return (
    <>
<Navbar collapseOnSelect expand="lg" className="" style={{backgroundColor:"rebeccapurple",}}>
      <Container>
        <img style={{width:"50px"}} src="logonew.png" alt="" />
        <Navbar.Brand className='text-white fs-3' >UsedHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">

            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav >
<LinkContainer to={"/"}><Nav.Link className='text-white' >Home</Nav.Link></LinkContainer>
              <NavDropdown title={<span className='text-white'>Categories</span>} id="collapsible-nav-dropdown">
              <NavDropdown.Item >Furniture</NavDropdown.Item>
              <NavDropdown.Item >Electronics</NavDropdown.Item>
              <NavDropdown.Item >Vehicles</NavDropdown.Item>
              <NavDropdown.Item >Books</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item > others</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className='text-white'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default Header