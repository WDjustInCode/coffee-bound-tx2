import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { AnchorLink } from "gatsby-plugin-anchor-links"

import instaIcon from '../img/instaIcon.svg'
import FBIcon from '../img/FBicon.svg'

import "./Global.css"

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="row justify-content-center fixed-top mx-0">
    <div className="col-12 col-md-10 px-0" style={{zIndex: 100}}>
      <Navbar className="shadow" light expand="md" style={{backgroundColor: 'rgba(134, 204, 204, 1)',}}>
        <NavbarBrand>
          <a href="https://www.facebook.com/CoffeeboundTx"><img src={FBIcon}  width="50" height="50" alt="" loading="lazy" /></a>
          <a href="https://www.instagram.com/coffee_bound/?hl=en"><img src={instaIcon} className="mx-1" width="50" height="50" alt="" loading="lazy" /></a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{fontSize:22}} href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:22}} href="/locations">LOCATION</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:22}} href="/career">CAREER</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:22}} href="/contact">CONTACT</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{fontSize:22}} nav caret>
                MENU
              </DropdownToggle>
              <DropdownMenu right className="text-center" onClick={toggle}>
                <DropdownItem>
                  <AnchorLink className="navMenu " to="/menu#staffPicksMenu">
                    Staff Picks
                  </AnchorLink>
                </DropdownItem>
                <DropdownItem>
                  <AnchorLink className="navMenu" to="/menu#espressoMenu">
                    Espresso
                  </AnchorLink>
                </DropdownItem>
                <DropdownItem>
                  <AnchorLink className="navMenu" to="/menu#coldBrewMenu">
                    Cold Brew
                  </AnchorLink>
                </DropdownItem>
                <DropdownItem>
                  <AnchorLink className="navMenu" to="/menu#nonCoffeeMenu">
                    Non-coffee Drinks
                  </AnchorLink>
                </DropdownItem>
                <DropdownItem>
                  <AnchorLink className="navMenu" to="/menu#blendedMenu">
                    Blended Drinks
                  </AnchorLink>
                </DropdownItem>
                <DropdownItem>
                  <AnchorLink className="navMenu font-weight-light" to="/menu#addOnsMenu">
                    Add Ons/Extras
                  </AnchorLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default NavbarComp;