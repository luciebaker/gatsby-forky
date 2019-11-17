import React from "react"
import styled from 'styled-components'
// import { FaCheckCircle } from 'react-icons/fa'
import Layout from "../components/layout"
import { PageHeader, Banner } from '../utilities'
import contactImg from '../images/bcg/contactBcg.jpeg'

import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={contactImg}><Banner title="Contact Forky's" subtitle="Add cool subtitle"></Banner></PageHeader>
  </Layout>
)


export default ContactPage