import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default function AppNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Navbar container light expand="md">
        <NavbarBrand tag={Link} to="/"><img src={logo} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem className="align-middle">
              <NavLink tag={Link} to="/deputados"><strong>Deputados</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/partidos"><strong>Partidos</strong></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
