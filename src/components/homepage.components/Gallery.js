import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import { styles, Section } from '../../utilities'
import Img from 'gatsby-image'

export default function Gallery() {
    return (
      <StaticQuery
        query={graphql`
          {
            img1: file(relativePath: { eq: "homeGallery/img-1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            img2: file(relativePath: { eq: "homeGallery/img-2.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            img3: file(relativePath: { eq: "homeGallery/img-3.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={data => {
          const img1 = data.img1.childImageSharp.fluid
          const img2 = data.img2.childImageSharp.fluid
          const img3 = data.img3.childImageSharp.fluid
          return (
            <Section>
              <GalleryWrapper>
                <div className="item item-1">
                  <Img fluid={img1} />
                </div>
                <div className="item item-2">
                  <Img fluid={img2} />
                </div>
                <div className="item item-3">
                  <Img fluid={img3} />
                </div>
              </GalleryWrapper>
            </Section>
          )
        }}
      />
    )
  }
  
  const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 1rem;
    .item {
      position: relative;
    }
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 992px) {
      .gatsby-image-wrapper {
        height: 100%;
      }
      grid-template-areas:
        'one  one two two  '
        'one  one three three ';
      .item-1 {
        grid-area: one;
      }
      .item-2 {
        grid-area: two;
      }
      .item-3 {
        grid-area: three;
      }
    }
  `
