import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const SPMenu = ({ menuItem }) => (
  <div className="row" style={{marginTop: 125, position: 'relative'}}>
    <span id="staffPicksMenu" style={{marginTop: -100, position: 'absolute'}}></span>
    <h2 className="col-12 text-center font-weight-bold">STAFF PICKS</h2>
    {menuItem.map((item) => {
      return (
        <div key={item.text} className="col-12 text-center">
          <div className="row">
            <div className={item.class}>
              <PreviewCompatibleImage imageInfo={item}/>
            </div>
            <div className="col">
              <div className="row">
                <p className="col-12" style={{fontSize: 24}}>{item.title}</p>
                <p className="col-12 text-muted" style={{marginTop: -25}}>{item.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

SPMenu.propTypes = {
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      subtitle: PropTypes.string,
      price1: PropTypes.string,
      price2: PropTypes.string,
      class: PropTypes.string, 
    })
  ),
}

export default SPMenu
