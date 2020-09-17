import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import "../components/Global.css"

import Layout from '../components/Layout'
import Features from '../components/Features'

export const LocationsPageTemplate = ({
  image2,
  intro,
}) => (
  <div className="row justify-content-center px-0 mx-0" id="MenuTop">
    <div
      className="col-10 col-md-8 position-relative"
      style={{
        height: 490,
        marginTop: 110,
        backgroundImage: `url(${
          !!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2
        })`,
        backgroundPosition: '82% center'
      }}
    >
      <h2
        className="position-absolute d-none d-xl-block"
        style={{
          backgroundColor: 'transparent',
          fontSize: 77,
          fontWeight: 'bold',
          color: 'white',
          padding: '1rem',
          top: '40%',
          left: '5%'
        }}
      >
        LOCATIONS
      </h2>
    </div>
    <div className="col-10 col-md-8 px-0 pb-4">
      <Features gridItems={intro.blurbs} />
    </div>
  </div>
)

LocationsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    description: PropTypes.string,
  }),
  //testimonials: PropTypes.shape({
    //childrenGooglePlacesReview: PropTypes.array,
  //}),
}

const LocationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  //const testimonials = data.googlePlacesPlace

  return (
    <Layout>
      <LocationsPageTemplate
        image={frontmatter.image.childImageSharp.fluid}
        image2={frontmatter.image2}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        //testimonials={testimonials}
      />
    </Layout>
  )
}

LocationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LocationsPage

export const pageQuery = graphql`
  query locationsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "locations-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            colClass
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            text2
            text3
            button
            buttonClass
            hrefAtt
          }
          heading
          description
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
