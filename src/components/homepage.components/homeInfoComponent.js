import React, { Component } from 'react'
import { styles, Section, Title, SectionButton } from '../../utilities'
import styled from 'styled-components'
import { Link } from 'gatsby'


export default class homeInfoComponent extends Component {
    render() {
        return (
            <Section>
            <Title message="Let us tell you a little" title="About Us"></Title>
            <InfoWrapper>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link to='/about/' style={{ textDecoration: 'none' }}>
            <SectionButton style={{margin: '2rem auto'}} >Read More</SectionButton>
            </Link>
            </InfoWrapper>
            </Section>
        )
    }
}

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