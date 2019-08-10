import React from "react"

const Footer = ({ darkMode }) => {
  return (
    <footer className={darkMode ? "dark" : ""}>
      © {new Date().getFullYear()}, Built by dickwyn. All rights reserved.
    </footer>
  )
}

export default Footer
