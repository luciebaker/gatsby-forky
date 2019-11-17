import React from "react"
import styled from 'styled-components'
// import { FaCheckCircle } from 'react-icons/fa'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utilities'
import aboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader img={aboutImg}><Banner title="About Forky's" subtitle="Add cool subtitle"></Banner></PageHeader>
  </Layout>
)


export default AboutPage