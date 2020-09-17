import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from '../img/coffeeBoundLogoDB.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faMapMarkerAlt, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const { social, address, contacts } = useSiteMetadata()
    return (
      <div className="row justify-content-center mx-0" style={{width: '100%'}}>
      <div className="col-12 col-md-10 text-center mt-5 pt-5 pb-1" style={{position: 'relative', backgroundColor: 'rgba(134, 204, 204, 1)'}}>
        <div className="row">
  
          <div className="col-12 p-5">
            <div className="row justify-content-center">
  
              <div className="col-6 col-md-2 p-2">
                <FontAwesomeIcon style={{color: 'rgb(30, 30, 30)', fontSize: 30}} icon={ faUsers } />
                <h3 className="">Social</h3>
                <div>
                  { social.map(mySocial =>
                    <div><a style={{color: 'white'}} href={ mySocial.url }>
                      { mySocial.service }
                    </a></div>
                  )}
                </div>
              </div>
  
              <div className="col-6 col-md-2 p-2">
                <FontAwesomeIcon style={{color: 'rgb(30, 30, 30)', fontSize: 30}} icon={ faEnvelope } />
                 <h3 className="">Contact</h3>
                 <div>
                   { contacts.map((contact, index) =>
                     <div><a style={{color: 'white'}} href={ contact.url }>{ contact.text }</a></div>
                   )}
                   <div><a style={{color: 'white'}} href="/contact">On Site</a></div>
                 </div>
              </div>
              
              <div className="col-6 col-md-2 p-2">
                <FontAwesomeIcon style={{color: 'rgb(30, 30, 30)', fontSize: 30}} icon={ faMapMarkerAlt } />
                <h3 className="">Visit</h3>
                <a style={{color: 'white'}} href="https://www.google.com/maps/place/Coffee+Bound/@29.4624753,-98.4353207,19z/data=!3m1!4b1!4m5!3m4!1s0x865cf55fc2cc694b:0x32312af37c2bb85b!8m2!3d29.4624753!4d-98.4347735" className="has-text-grey-dark">
                  { address.line1 }<br />
                  { address.line2 }<br />
                  { address.line3 }<br />
                  { address.line4 }
                </a>
              </div>

              <div className="col-6 col-md-2 p-2">
                <div className="row">
                  <div className="col">
                    <AnchorLink className=""  to="/">
                      <img class="mw-100" style={{border: '1px solid black', borderRadius: 20,}} src={ logo } alt="logo" />
                    </AnchorLink>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
  
        <p className="copyright px-3">&copy; 2020 Coffee Bound | Design by <a style={{color: 'white'}} title="justInCodeWD" href="https://www.instagram.com/justincodewd/?hl=en">justInCodeWD</a> </p>
  
        <div 
            style={{
              position: 'absolute',
              top: -24,
              left: '50%',
              marginLeft: -40,
              textAlign: 'center',
            }} 
            title="Back to Top" 
            onClick={() => scrollTo('#top')}
          >
          <button 
            className="button"
            style={{
              textDecoration: 'none',
              border: '0 none',
              display: 'block',
              width: 80,
              height: 80,
              background: 'rgb(30, 30, 30)',
              color: '#fff',
              borderRadius: '100%',
              outline: 'none !important'
            }} 
            title="Back to Top" 
            onClick={() => scrollTo('#top')}
          >
            <FontAwesomeIcon icon={ faChevronUp } />
          </button>
        </div>
      </div>
      </div>
    )
  }

