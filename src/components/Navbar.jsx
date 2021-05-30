import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { links } from "../data";
import "../components/navbar.css";

const Navbar_ = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" className="justify-content-start">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="hamburger" />
          <Navbar.Collapse id="basic-navbar-nav burger-icon">
            <Nav className="mr-auto hamburger" id="center-menu">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <Nav.Link href={url} key={id} id="color">
                    {`${text}`.charAt(0).toUpperCase() + `${text}`.slice(1)}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <div className="right">
            <a href="#" className="signup-btn">
              <span>Sign Up</span>
            </a>
          </div>
        </Navbar>
      </Container>
    </>
  );
};

export default Navbar_;
