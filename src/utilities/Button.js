import styled from 'styled-components'
import { styles } from '../utilities'

const BannerButton = styled.button`
display: block;
color: ${styles.colors.mainWhite};
background: transparent;
padding: 0.5rem 1rem;
text-transform: uppercase;
font-size: 1.5rem;
margin-bottom: 1rem;
${styles.transition({})};
&:hover{
    background: white;
    color: black;
    cursor: pointer;
}
`

const SectionButton = styled(BannerButton)`
color: ${styles.colors.mainBlack};
border: 0.15rem solid black;
&:hover{
    background: black;
    color: white;
}
`

export {BannerButton, SectionButton}