import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><b>Salary Prediction App</b></Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />


                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>

                            <NavDropdown title="About" id="navbar-dropdown">
                                <NavDropdown.Item href="#features">Features</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#signup">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent;
