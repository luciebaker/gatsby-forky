

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/global/navbar'
import Footer from '../components/global/Footer'
// import '../Sass/layout.scss'
// import './bootstrap.min.css'
// import "./layout.css"

const Layout = ({children}) => {
  return (
    <React.Fragment>
    <GlobalStyle />
    <Navbar />
      {children}
    <Footer />
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  font-family: 'Montserrat';
}
body {
  font-family: 'raleway';
  color:#2b2d2f;
  background:#fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
