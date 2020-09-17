import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import {
  NavLink
} from 'reactstrap';

const FeatureGrid = ({ gridItems }) => (
  <div className="row justify-content-center mx-0 px-0">
    {gridItems.map((item) => {
      return (
        <div key={item.text} className={item.colClass}>
          <div className="row">
            <div className="col px-0 py-4">
              <PreviewCompatibleImage imageInfo={item}/>
            </div>
            <div style={{position: 'absolute', height: '100%', width: '100%', top: 0,}}>
              <div className="" style={{display: 'table', height: '100%', width: '100%'}}>
                <div className="p-4" style={{display: 'table-cell', verticalAlign: 'middle', textAlign: 'center'}}>
                  <p className="mb-0 font-weight-bold" style={{fontSize: 28}}>{item.text}</p>
                  <p className="text-muted mb-0" style={{marginTop: -10, fontSize: 20}}>{item.text2}</p>
                  <p className="text-dark" style={{marginTop: -10}}>{item.text3}</p>
                  <NavLink className="p-0 m-0" href={item.hrefAtt}><button class={item.buttonClass} style={{border: '4px solid white', fontSize: 24, fontWeight: 'bold', color: 'white'}}>{item.button}</button></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      text2: PropTypes.string,
      text3: PropTypes.string,
      button: PropTypes.string,
      buttonClass: PropTypes.string, 
      colClass: PropTypes.string, 
      hrefAtt: PropTypes.string,
    })
  ),
}

export default FeatureGrid
