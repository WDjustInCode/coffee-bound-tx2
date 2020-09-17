import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import FlavorPop from './FlavorPop'
import "./Global.css"


const AddOnsMenu = ({ menuItem }) => {

  return (
  <div className="row pt-5" style={{position: 'relative'}}>
    <span id="addOnsMenu" style={{marginTop: -100, position: 'absolute'}}></span>
    <h2 className="col-12 text-center font-weight-bold">ADD ONS/EXTRAS</h2>
    <p className="col-12 text-center text-muted" style={{marginTop: -10}}>CUSTOMIZE ANY DRINK WITH:</p>
    {menuItem.map((item) => {
      return (
        <div key={item.text} className="col-12 text-center">
          <div className="row justify-content-center">
            <div className={item.class}>
              <PreviewCompatibleImage imageInfo={item}/>
            </div>
            <div className="col-12 mb-3" style={{fontSize: 24}}>{item.title}</div>
          </div>
        </div>
      )
    })}
    <FlavorPop />
  </div>
)}

AddOnsMenu.propTypes = {
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      price1: PropTypes.string,
      price2: PropTypes.string,
      class: PropTypes.string, 
    })
  ),
}

export default AddOnsMenu
