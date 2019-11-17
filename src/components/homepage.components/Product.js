import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utilities'

export default function Product({ product }) {
  const { name, price, ingredients } = product

  return (
    <ProductWrapper>
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">${price}</h3>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}

export const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
  }
  .name {
    color: ${styles.colors.mainGrey};
    margin-top: 0.5rem;
  }
  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;

  }
  // @media (min-width: 650px) {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   grid-column-gap: 1rem;
  // }
`