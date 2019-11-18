import React from 'react'
import Product from './Product'
import { StaticQuery, graphql } from 'gatsby'
import { Section, Title, SectionButton } from '../../utilities'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default function Menu() {
    return (
      <Section>
        <Title title="Featured Dishes" message="A little preview of our" />
        <ProductList>
          <StaticQuery
            query={graphql`
              {
                items: allContentfulMenu {
                  edges {
                    node {
                      name
                      price
                      id
                      ingredients
                    }
                  }
                }
              }
            `}
            render={data => {
              const { edges: food } = data.items
              return food.map(item => {
                return <Product key={item.node.id} product={item.node} />
              })
            }}
          />
        </ProductList>
        <Link to="/menu/" style={{ textDecoration: 'none' }}>
          <SectionButton style={{ margin: '2rem auto' }}> See the menu</SectionButton>
        </Link>
      </Section>
    )
  }

const ProductList = styled.div`
margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 2.5rem;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`