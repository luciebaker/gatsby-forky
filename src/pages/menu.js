import React from "react"
import styled from 'styled-components'
// import { FaCheckCircle } from 'react-icons/fa'
import Layout from "../components/layout"
import { PageHeader, Banner } from '../utilities'
import menuImg from '../images/bcg/menuBcg.jpeg'
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader img={menuImg}><Banner title="Forky's Menu" subtitle="Add cool subtitle"></Banner></PageHeader>
  </Layout>
)


export default MenuPage