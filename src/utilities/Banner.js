import React from 'react'
import styled from 'styled-components'
import { styles } from '../utilities'

export default function Banner({ title, subtitle, children }) {
    return (
        <BannerWrapper>
           <h1 className='title'>{title}</h1> 
           <h3 className='subtitle'>{subtitle}</h3>
           {children}
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
margin-bottom: 3rem;
text-align: center;
.title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;

}
.subtitle {
    color ${styles.colors.mainYellow};
    font-size: 2.2rem;
}
`

Banner.defaultProps = {
    title: 'default title',
    
}