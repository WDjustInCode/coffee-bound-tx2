import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const BlendedMenu = ({ menuItem }) => (
  <div className="menuColumns columns is-multiline pt-0 px-0 mt-5" style={{zIndex: -1}}>
    <span id="blendedMenu" className="anchors"></span>
    <h1 className="column is-12 has-text-black has-text-centered pb-1 has-text-weight-bold is-size-4">BLENDED DRINKS</h1>
    {menuItem.map((item) => {
      return (
        <div key={item.text} className="column is-6">
          <div className="columns is-mobile is-multiline is-centered">
            <div className={item.class}>
              <PreviewCompatibleImage imageInfo={item}/>
            </div>
            <div className="column">
              <div className="columns is-centered is-mobile">
                <p className="column is-1"></p>
                <p className={item.titleClass}>{item.title}</p>
                <p className={item.optionClass} style={{fontSize: '60%', marginTop: 6}}>{item.option}</p>
                <p className="column is-2 has-text-black has-text-right px-0">{item.price1}</p>
                <p className="column is-2 has-text-black has-text-right px-0">{item.price2}</p>
                <p className="column is-1"></p>
              </div>
            </div>
            <div className={item.flavorsClass} style={{marginTop: -25}}>
              {item.flavors}
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

BlendedMenu.propTypes = {
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      price1: PropTypes.string,
      price2: PropTypes.string,
      class: PropTypes.string, 
      flavors: PropTypes.string,
      flavorsClass: PropTypes.string,
      titleClass: PropTypes.string,
      optionClass: PropTypes.string,
    })
  ),
}

export default BlendedMenu
