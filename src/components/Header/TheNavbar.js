import React from "react";
import NavCartButton from "./NavCartButton.js";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link as ScrollLink } from "react-scroll";
import classes from "./TheNavbar.module.css";
import Logo from "../../assets/Logo/Logo.svg";

const TheNavbar = (props) => {
  const navigateToSignUp = () => {
    // You can implement your navigation logic here
    // For example, you can use window.location to change the URL
    window.location.href = "./form"; // Navigate to the "/form" route
  };

  return (
    <>
      <Navbar
        expand="xl"
        className={`${classes.navbar} fixed-top`}
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <Navbar.Brand className={classes.navbar_brand}>
          <ScrollLink to="hero" spy={true} smooth={true} offset={-50} duration={500}>
            <img src={Logo} alt="My logo" />
          </ScrollLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classes.toggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${classes.nav__linkgroup} ms-auto`}>
            <Nav.Link
              className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
            >
              <ScrollLink
                activeClass={classes.active}
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </ScrollLink>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <ScrollLink
                activeClass={classes.active}
                to="why"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Why choose us
              </ScrollLink>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <ScrollLink
                activeClass={classes.active}
                to="dishes"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Our dishes
              </ScrollLink>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <ScrollLink
                activeClass={classes.active}
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About us
              </ScrollLink>
            </Nav.Link>
            <a className={`${classes.nav__link} me-4`} style={{textDecoration:'none'}} href="/form">
              Sign Up
            </a>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <ScrollLink
                activeClass={classes.active}
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Testimonials
              </ScrollLink>
            </Nav.Link>
            <Nav.Link href="#buttons" className={`${classes.nav__link}`}>
              <NavCartButton onClick={props.onShowCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TheNavbar;
