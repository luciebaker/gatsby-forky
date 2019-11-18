import React from "react"
import styled from 'styled-components'
// import { FaCheckCircle } from 'react-icons/fa'
import Layout from "../components/layout"
import { PageHeader, Banner, Section, Title } from '../utilities'
import contactImg from '../images/bcg/homeBcg.jpg'

import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={contactImg}><Banner title="Contact Forky's" ></Banner></PageHeader>
<Section>
<Title message="To make a booking, ask a question, or just say Hello" title="Contact Us"></Title>
</Section>
  </Layout>
)



export default ContactPage