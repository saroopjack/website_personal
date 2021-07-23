import React from "react";
import SocialMedia from "./SocialMedia";
import { Nav, NavDropdown, Container, Navbar, NavLink } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar className="site-header">
        <Container>
          <Nav className="navbar-left">
            <NavLink href="work">WORK</NavLink>
            <NavLink href="about">ABOUT</NavLink>
          </Nav>
          <Nav>
            <NavLink className="logo-wrap">Saroop Jack</NavLink>
          </Nav>
          <Nav>
            <SocialMedia />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
