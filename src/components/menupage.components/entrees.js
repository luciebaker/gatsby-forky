import React from 'react'
import MenuProduct from './menuProducts'
import { StaticQuery, graphql } from 'gatsby'
import { Section, Title } from '../../utilities'
import styled from 'styled-components'

export default function entrees() {
    return (
      <Section>
        <Title title="Entrees" message="Time to get serious! Here are our" />
        <ProductList>
          <StaticQuery
            query={graphql`
              {
                items: allContentfulEntrees {
                  edges {
                    node {
                      title
                      price
                      id
                      description
                    }
                  }
                }
              }
            `}
            render={data => {
              const { edges: main } = data.items
              return main.map(item => {
                return <MenuProduct key={item.node.id} product={item.node} />
              })
            }}
          />
        </ProductList>
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