import React from "react"
import {Section, Title } from '../utilities'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
    <Title message="Oops! You just hit a route that doesn't exist... the sadness" title="Page Not Found"></Title>
    </Section>

  </Layout>
)

export default NotFoundPage
