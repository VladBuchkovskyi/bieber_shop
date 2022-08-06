import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './index.sass'

const Header = () => {
  return (
    <header>
      <div className="navbar-container">
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">Proshop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart" />
                  <span className="nav-text">Cart</span>
                </Nav.Link>
                <Nav.Link href="/login">
                  <i className="fas fa-user" />
                  <span className="nav-text">Sign In</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  )
}

export default Header
