// eslint-disable
import React, { Component } from "react"
import PropTypes from "prop-types"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import Header from "./Header"
import Footer from "./Footer"
import "../scss/App.scss"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: true,
    }
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }

  render() {
    const { darkMode } = this.state

    return (
      <div className={darkMode ? "dark-mode" : "layout"}>
        <Header />
        <main>
          <div className="toggle-container">
            <Toggle
              className="toggle"
              icons={false}
              defaultChecked={darkMode}
              onChange={this.toggleDarkMode}
            />{" "}
            <p>🌙</p>
          </div>

          {this.props.children}
        </main>
        <Footer darkMode={darkMode} />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
