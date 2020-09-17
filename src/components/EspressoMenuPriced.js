import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const EspressoMenu = ({ menuItem }) => (
  <div className="menuColumns columns is-multiline mt-5 py-1 px-0" style={{zIndex: -1}}>
    <span id="espressoMenu" className="anchors"></span>
    <h1 className="column is-12 has-text-black has-text-centered pb-1 has-text-weight-bold is-size-4">ESPRESSO</h1>
    {menuItem.map((item) => {
      return (
        <div key={item.text} className="column is-6">
          <div className="columns is-mobile">
            <div className={item.class}>
              <PreviewCompatibleImage imageInfo={item}/>
            </div>
            <div className="column">
              <div className="columns is-centered is-mobile">
                <p className="column is-1"></p>
                <p className="column is-6 has-text-black has-text-weight-semibold px-0">{item.title}</p>
                <p className="column is-2 has-text-black has-text-right px-0">{item.price1}</p>
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

EspressoMenu.propTypes = {
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

export default EspressoMenu
