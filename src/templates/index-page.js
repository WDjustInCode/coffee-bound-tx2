import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import '../components/all.sass'
import "../components/Global.css"

import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

export const IndexPageTemplate = ({
  image,
  image2,
  image3,
  intro,
  testimonials
}) => (
  <div id="top">
    <div className="container-fluid px-0">
      <div className="row justify-content-center mx-0">
        <div className="col-10 d-md-none" style={{height: 100}}/>
        <div className="col-10" style={{height: 100}}/>
        <div className="col-12 col-md-7">
          <Img fluid={image} className=""/>
        </div>
        <div className="col-10 d-md-none" style={{height: 100}}/>
        <div className="col-10" style={{height: 70}}/>
      </div>
      <div className="row justify-content-center mx-0">
        <div className="col-10 col-md-8 px-0">
          <Features gridItems={intro.blurbs} />
        </div>  
      </div>
      <div className="d-md-none" style={{marginTop: -60}}></div>
      <div className="row justify-content-center mx-0">
        <div className="col-12 col-md-7">
          <Img fluid={image3}/>
        </div>
      </div>
      <div className="row justify-content-center mx-0 pb-5">
        <div
          className="col-10 col-sm-8 p-5"
          style={{
            height: 490,
            backgroundImage: `url(${
              !!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2
            })`,
            backgroundPosition: 'center center'
          }}
        >
          <div className="row  align-items-center" style={{backgroundColor: 'rgba(38, 38, 38, .5)', height: '100%'}}>
            <div className="col-12">
            <h2
              className="col text-center"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem',
              }}
            >
              Coffee Talk
            </h2>
            <p className="col px-4" style={{color: 'white'}}>{intro.description}</p>   
            </div>
          </div>   
        </div>
      </div>
        {/*<Testimonials testimonials={testimonials} />*/}
    </div>  
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  //const testimonials = data.googlePlacesPlace

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image.childImageSharp.fluid}
        image2={frontmatter.image2}
        image3={frontmatter.image3.childImageSharp.fluid}
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        image3 {
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
