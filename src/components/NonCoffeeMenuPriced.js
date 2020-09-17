import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const NonCoffeeMenu = ({ menuItem }) => (
  <div className="menuColumns mt-5 py-1 columns is-multiline px-0" style={{zIndex: -1}}>
    <span id="nonCoffeeMenu" className="anchors"></span>
    <h1 className="column is-12 has-text-black has-text-centered has-text-weight-bold is-size-4 pb-1">NON-COFFEE DRINKS</h1>
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
                <p className={item.optionClass} style={{fontSize: '65%', marginTop: 6}}>{item.option}</p>
                <p className={item.price1Class}>{item.price1}</p>
                <p className="column is-2 has-text-black has-text-right px-0">{item.price2}</p>
                <p className="column is-1"></p>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

NonCoffeeMenu.propTypes = {
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      titleClass: PropTypes.string,
      price1: PropTypes.string,
      price1Class: PropTypes.string,
      price2: PropTypes.string,
      class: PropTypes.string, 
      optionClass: PropTypes.string,
      option: PropTypes.string,
    })
  ),
}

export default NonCoffeeMenu
