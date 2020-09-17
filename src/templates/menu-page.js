import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from '../components/Layout'
import StaffPicksMenu from '../components/StaffPicksMenu'
import EspressoMenu from '../components/EspressoMenu'
import ColdBrewMenu from '../components/ColdBrewMenu'
import NonCoffeeMenu from '../components/NonCoffeeMenu'
import BlendedMenu from '../components/BlendedMenu'
import AddOnsMenu from '../components/AddOnsMenu'
import { Badge } from 'reactstrap';

export const AboutPageTemplate = ({ staffPicksMenu, espressoMenu, coldBrewMenu, nonCoffeeMenu, blendedMenu, addOnsMenu }) => {

  return (
    <div id="top" className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <StaffPicksMenu menuItem={staffPicksMenu.items} />
            <EspressoMenu menuItem={espressoMenu.items} />
            <ColdBrewMenu menuItem={coldBrewMenu.items} />
            <NonCoffeeMenu menuItem={nonCoffeeMenu.items} />
            <BlendedMenu menuItem={blendedMenu.items} />
            <AddOnsMenu menuItem={addOnsMenu.items} />
            <div className="row justify-content-center m-4 pt-5 px-0" >
              <Badge className="col-3 col-sm-2 col-lg-1 mr-2 mb-2" color="dark">
                <AnchorLink className="navMenu" to="/menu#staffPicksMenu">
                  Staff Picks
                </AnchorLink>
              </Badge>
              <Badge className="col-3 col-sm-2 col-lg-1 mr-2 mb-2" href="#espressoMenu" color="dark">
                <AnchorLink className="navMenu" to="/menu#espressoMenu">
                  Espresso
                </AnchorLink>
              </Badge>
              <Badge className="col-3 col-sm-2 col-lg-1 mr-2 mb-2 " href="#coldBrewMenu" color="dark">
                <AnchorLink className="navMenu" to="/menu#coldBrewMenu">
                  Cold Brew
                </AnchorLink>
              </Badge>
              <Badge className="col-4 col-sm-2 col-lg-1 mr-2 mb-2 " href="#nonCoffeeMenu" color="dark">
                <AnchorLink className="navMenu" to="/menu#nonCoffeeMenu">
                  Non-coffee
                </AnchorLink>
              </Badge>
              <Badge className="col-3 col-sm-2 col-lg-1 mb-2" href="#blendedMenu" color="dark">
                <AnchorLink className="navMenu" to="/menu#blendedMenu">
                  Blended
                </AnchorLink>
              </Badge>
            </div>
          </div>
        </div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  staffPicks: PropTypes.shape({
    items: PropTypes.array,
  }),
  espresso: PropTypes.shape({
    items: PropTypes.array,
  }),
  coldBrew: PropTypes.shape({
    items: PropTypes.array,
  }),
  nonCoffee: PropTypes.shape({
    items: PropTypes.array,
  }),
  blended: PropTypes.shape({
    items: PropTypes.array,
  }),
  addOns: PropTypes.shape({
    items: PropTypes.array,
  }),
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        staffPicksMenu={frontmatter.staffPicks}
        espressoMenu={frontmatter.espresso}
        coldBrewMenu={frontmatter.coldBrew}
        nonCoffeeMenu={frontmatter.nonCoffee}
        blendedMenu={frontmatter.blended}
        addOnsMenu={frontmatter.addOns}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        staffPicks {
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            subtitle
            class
          }
        }
        espresso {
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            subtitle
            price1
            price2
            class
          }
        }
        coldBrew {
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            price1
            price2
            class
          }
        }
        nonCoffee {
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            class
            title
            titleClass
            subtitle
            option
            optionClass
            price1
            price1Class
            price2
            flavor1
            flavor2
            flavor3
            flavor4
          }
        }
        blended {
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            class
            title
            titleClass
            subtitle
            price1
            price2
            option
            optionClass
            flavor1
            flavor2
            flavor3
            flavorsClass
          }
        }
        addOns {
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            price2
            class
          }
        }
      }
    }
  }
`
