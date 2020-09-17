import React from 'react'

const MenuBar = class extends React.Component {
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
        style={{backgroundColor: 'rgb(30, 30, 30)', boxShadow: '0px 2px 13px 0px rgba(47, 79, 79, .5' }}
        className="navbar is-transparent is-fixed-top p-0"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container p-0" style={{}}>
          <div className="columns" style={{width: '100%'}}>         
            <div class="tabs column" style={{marginTop: 90}}>
              <ul>
                <li class="has-text-weight-bold"><a class="has-text-white" href="#staffPicksMenu">Staff Picks</a></li>
                <li class="has-text-weight-bold"><a class="has-text-white" href="#espressoMenu">Espresso</a></li>
                <li class="has-text-weight-bold"><a class="has-text-white" href="#coldBrewMenu">Cold Brew</a></li>
                <li class="has-text-weight-bold"><a class="has-text-white" href="#nonCoffeeMenu">Non-Coffee Drinks</a></li>
                <li class="has-text-weight-bold"><a class="has-text-white" href="#blendedMenu">Blended Drinks</a></li>
                <li class="has-text-weight-bold"><a class="has-text-white" href="#addOnsMenu">Add Ons/Extras</a></li>
              </ul>
            </div>
          </div> 
        </div>
      </nav>
    )
  }
}

export default MenuBar
