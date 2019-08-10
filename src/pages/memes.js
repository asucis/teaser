import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FoodPuns = () => {
  const data = useStaticQuery(graphql`
    query {
      doughnutMeme: file(relativePath: { eq: "doughnut-meme.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ketchupMeme: file(relativePath: { eq: "ketchup-meme.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tacoMeme: file(relativePath: { eq: "taco-meme.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Food Puns" />
      <h3>Some food puns while we are rebuilding</h3>
      <Img
        style={{ width: "inherit", margin: "25px auto" }}
        fluid={data.ketchupMeme.childImageSharp.fluid}
      />
      <Img
        style={{ width: "inherit", margin: "25px auto" }}
        fluid={data.tacoMeme.childImageSharp.fluid}
      />
      <Img
        style={{ width: "inherit", margin: "25px auto" }}
        fluid={data.doughnutMeme.childImageSharp.fluid}
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default FoodPuns
