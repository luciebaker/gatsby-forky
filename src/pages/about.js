import React from "react"
import styled from 'styled-components'
// import { FaCheckCircle } from 'react-icons/fa'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner, Section, Title } from '../utilities'
import aboutImg from '../images/bcg/homeBcg.jpg'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader img={aboutImg}><Banner title="About Forky's"></Banner></PageHeader>
    <Section>
    <Title message="Let us tell you a little bit more" title="About Us"></Title>
    <InfoWrapper>
    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <br />
    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <br />
    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </InfoWrapper>
    </Section>
  
    </Layout>
)

const InfoWrapper = styled.div`
    width: 85%;
    margin: 1.2rem auto;
    .text {
        line-height: 2rem;
        color: #2b2d2f;
    }
    @media (min-width: 768px) {
        width: 75%
    }

    @media (min-width: 992px) {
        width: 65%
    }
`



export default AboutPage