import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import LandingSection from "../components/Globals/LandingSection"
import Menu from "../components/Home/Menu"
import "../components/layout.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <LandingSection
      img={data.img.childImageSharp.fluid}
      title="Ancestros Coffee"
      description="From ancient memories"
      styleClass="default-background"
    />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          category
          image {
            gatsbyImageData(width: 100, height: 100)
          }
          price
        }
      }
    }
  }
`

export default IndexPage
