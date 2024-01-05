import { useState, useEffect } from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo spa 1.png"

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false)

  const changeBackgroundColor = () => {
    window.scrollY > 10 ? setChangeColor(true) : setChangeColor(false)
  }

  useEffect(() => {
    changeBackgroundColor;

    window.addEventListener('scroll', changeBackgroundColor)
  })


  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
            <img src={Logo} alt="" className="logo"/> 
        <Navbar.Brand href="#home" className="fs-5 fw-bold">
          PT. Sarana <br /> Packaging Agrapana
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return <div className="nav-link" key={link.id}>
                <NavLink to={link.path} className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""} end>{link.text}</NavLink>
              </div>
            })}
          </Nav>

            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">Join With Us</button>
            </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent