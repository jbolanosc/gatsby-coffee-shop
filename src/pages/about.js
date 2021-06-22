import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import LandingSection from "../components/Globals/LandingSection"
import Info from "../components/Home/Info"
import "../components/layout.css"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <LandingSection
      img={data.img.childImageSharp.fluid}
      title="About us"
      styleClass="about-background"
    />
    <Info />
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
  }
`

export default AboutPage
