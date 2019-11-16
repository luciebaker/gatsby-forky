import React from "react"
import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Welcome to Forky's</h3>
    <Button>Click me <FaCheckCircle /></Button>
  
  </Layout>
)

const Button = styled.button`
background: green;
color: white;
`

export default IndexPage
