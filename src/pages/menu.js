import React from "react"
import Layout from "../components/layout"
import { PageHeader, Banner } from '../utilities'
import menuImg from '../images/homeGallery/img-1.jpg'
import Entrees from '../components/menupage.components/entrees'
import Appetizers from '../components/menupage.components/appetizers'
import Deserts from '../components/menupage.components/deserts'
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader img={menuImg}><Banner title="Forky's Menu" subtitle="Come hungry, Leave happy"></Banner></PageHeader>
      <Appetizers />
      <Entrees />
      <Deserts />
    </Layout>
)


export default MenuPage