import React from "react"
// import styled from 'styled-components'
import Layout from "../components/layout"
import { HomeHeader, Banner, BannerButton} from '../utilities'
import img from "../images/bcg/homeBcg.jpeg"
import HomeInfo from '../components/homepage.components/homeInfoComponent'
import Gallery from '../components/homepage.components/Gallery'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HomeHeader img={img}><Banner title="Welcome to Forky's" subtitle="Add cool subtitle">
    <BannerButton style={{margin: '2.5rem auto'}}>Menu</BannerButton>
    </Banner>
    </HomeHeader>
   <HomeInfo />
   <Gallery />
  </Layout>
)

export default IndexPage
