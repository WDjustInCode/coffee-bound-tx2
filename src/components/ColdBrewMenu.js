import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ColdBrewMenu = ({ menuItem }) => (
  <div className="row pt-5" style={{position: 'relative'}}>
    <span id="coldBrewMenu" style={{marginTop: -100, position: 'absolute'}}></span>
    <h2 className="col-12 text-center font-weight-bold">COLD BREW</h2>
    {menuItem.map((item) => {
      return (
        <div key={item.text} className="col tex-center">
          <div className="row">
            <div className={item.class}>
              <PreviewCompatibleImage imageInfo={item}/>
            </div>
            <div className="col text-center" style={{fontSize: 24}}>{item.title}</div>
          </div>
        </div>
      )
    })}
  </div>
)

ColdBrewMenu.propTypes = {
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

export default ColdBrewMenu
