import React from 'react'
import PropTypes from 'prop-types'

import PreviewCompatibleImage from './PreviewCompatibleImage'
import MenuModal from './MenuModal'

const NonCoffeeMenu = ({ menuItem }) => {
 
  return(
  <div className="row pt-5" style={{position: 'relative'}}>
    <span id="nonCoffeeMenu" style={{marginTop: -100, position: 'absolute'}}></span>
    <h2 className="col-12 text-center font-weight-bold">NON-COFFEE DRINKS</h2>
    {menuItem.map((item) => {
      return (
        <div key={item.text} className="col-12">
          <div className="row">
            <div className={item.class}>
              <PreviewCompatibleImage imageInfo={item}/>
            </div>
            <div className="col-12 text-center">
              <div className="row justify-content-center">
                <p className={item.titleClass} style={{fontSize: 24}} >{item.title}</p>
                <p className={item.optionClass} style={{fontSize: 12, marginTop: 9}}>{item.option}</p>
                <p className="col-12 text-muted" style={{marginTop: -25}}>{item.subtitle}</p>
                <p className="col-12 text-muted" style={{marginTop: -25}}>{item.flavor1}</p>
                <p className="col-12 text-muted" style={{marginTop: -25}}>{item.flavor2}</p>
                <p className="col-12 text-muted" style={{marginTop: -25}}>{item.flavor3}</p>
                <p className="col-12 text-muted" style={{marginTop: -25}}>{item.flavor4}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })}
    {/*<a className="button is-size-7 has-text-grey-dark has-text-centered mt-3" href="#addOnsMenu">CUSTOM DRINKS</a>*/}
    <MenuModal buttonLabel="CUSTOMIZE" style={{fontSize: 12}} />
  </div>
)}

NonCoffeeMenu.propTypes = {
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      titleClass: PropTypes.string,
      subtitle: PropTypes.string,
      class: PropTypes.string, 
      optionClass: PropTypes.string,
      option: PropTypes.string,
      flavor1: PropTypes.string,
      flavor2: PropTypes.string,
      flavor3: PropTypes.string,
      flavor4: PropTypes.string,
    })
  ),
}

export default NonCoffeeMenu
