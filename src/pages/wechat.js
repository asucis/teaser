import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wechat = () => {
  const data = useStaticQuery(graphql`
    query {
      wechatQr: file(relativePath: { eq: "cis-wechat.jpg" }) {
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
      <SEO title="ASUCIS WeChat" />
      <h1>Scan the QR code</h1>
      <p>wechatid: asucis</p>
      <Img
        style={{ width: "300px", margin: "0 auto 25px" }}
        fluid={data.wechatQr.childImageSharp.fluid}
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Wechat
