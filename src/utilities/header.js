import React from 'react'
import styled from 'styled-components'
import img from '../images/bcg/homeBcg.jpeg'

function HomeHeader({ img, children }) {
    return <IndexHeader img={img}>
            {children}
        </IndexHeader>
}

function PageHeader({ img, children }) {
    return <DefaultHeader img={img}>
            {children}
        </DefaultHeader>
}

const IndexHeader  = styled.header`
min-height: calc(100vh - 56px);
background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.img})center/cover fixed no-repeat;
display: flex;
justify-content: center;
align-items: center;
`
const DefaultHeader = styled(IndexHeader)`
min-height: 60vh;
`

//default image added here as backup in case image set in index.js does not show
HomeHeader.defaultProps = {
    img: img,
}
//default image as backup for all pages except home page but will use same photo as home page 
PageHeader.defaultProps = {
    img: img,
}

export { HomeHeader, PageHeader }

