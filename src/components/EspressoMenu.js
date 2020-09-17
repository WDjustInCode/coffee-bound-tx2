import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import MenuModal from './MenuModal'

const EspressoMenu = ({ menuItem }) => (
  <div className="row pt-5" style={{position: 'relative'}}>
    <span id="espressoMenu" style={{marginTop: -100, position: 'absolute'}}></span>
    <h2 className="col-12 text-center font-weight-bold">ESPRESSO</h2>
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
    {/*<a className="button is-size-7 has-text-grey-dark has-text-centered mt-3" href="#addOnsMenu">CUSTOM ESPRESSO</a>*/}
    <MenuModal buttonLabel="CUSTOMIZE" style={{fontSize: 12}} />
  </div>
)

EspressoMenu.propTypes = {
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      subtitle: PropTypes.string,
      class: PropTypes.string, 
    })
  ),
}

export default EspressoMenu


