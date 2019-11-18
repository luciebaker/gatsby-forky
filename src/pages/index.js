import React from "react"
// import styled from 'styled-components'
import Layout from "../components/layout"
import { HomeHeader, Banner, BannerButton} from '../utilities'
import img from "../images/bcg/homeBcg.jpg"
import HomeInfo from '../components/homepage.components/homeInfoComponent'
import Gallery from '../components/homepage.components/Gallery'
import Menu from '../components/homepage.components/Menu'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HomeHeader img={img}><Banner title="Welcome to Forky's" subtitle="Come hungry, Leave happy">
    <BannerButton style={{margin: '2.5rem auto'}}>Menu</BannerButton>
    </Banner>
    </HomeHeader>
   <HomeInfo />
   <Gallery />
   <Menu />
  </Layout>
)

export default IndexPage
