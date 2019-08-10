import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

library.add(fab)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Something great is brewing!</h1>
      <p>
        The site is currently being re-built. Watch out this space for something
        amazing!
      </p>
      <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <h4>Connect with us on social media</h4>
      <div className="social-links">
        <div className="icon">
          <a href="https://facebook.com/asucis" target="_blank">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </a>
        </div>
        <div className="icon">
          <a href="https://twitter.com/asu_cis" target="_blank">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/asucis/" target="_blank">
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
        </div>
        <div className="icon">
          <Link to="/wechat">
            <FontAwesomeIcon icon={["fab", "weixin"]} />
          </Link>
        </div>
      </div>
      <div className="memes-button">
        🎁 Pardon the construction <Link to="/memes">click here</Link> for a
        little smile
      </div>
    </Layout>
  )
}

export default IndexPage
