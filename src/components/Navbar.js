import React from 'react'
import { Link } from 'gatsby'
import instaIcon from '../img/instaIcon.svg'
import FBIcon from '../img/FBicon.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        style={{backgroundColor: 'rgba(134, 204, 204, 1)', boxShadow: '0px 2px 13px 0px rgba(47, 79, 79, .7'}}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="columns navbar-brand is-vcentered" style={{margin: 0}}>
            <div className="column pt-4">
              <a
                className=""
                style={{padding: 5,}}
                href="https://www.instagram.com/backwoods_biochar_llc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <img src={instaIcon} alt="Instagram" className=""/>
                </span>
              </a>
              <a
                className=""
                href="https://www.facebook.com/Backwoods-Biochar-104956791259951"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-large">
                  <img src={FBIcon} alt="Facebook" />
                </span>
              </a>
            </div>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger mt-1 ${this.state.navBarActiveClass}`}
              style={{paddingBottom: 'auto', paddingTop: 'auto', height: '4em', width: '4em', color: 'black'}}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
            style={{backgroundColor: 'rgba(134, 204, 204, 1)'}}
          >
            <div className="navbar is-size-4 has-text-centered " style={{backgroundColor: 'rgba(134, 204, 204, 1)', marginLeft: 'auto'}}>
              <Link className="navbar-item has-text-black"  to="/about">
                About
              </Link>
              <Link className="navbar-item has-text-black" to="/products">
                Products
              </Link>
              <Link className="navbar-item has-text-black" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item has-text-black" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
