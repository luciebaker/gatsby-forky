import React, { Component } from 'react'
import {Link} from 'gatsby'
import Logo from '../../../images/logo2.svg'
import {FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utilities'

export default class NavbarHeader extends Component {
    render() {
        const{handleNavbar} = this.props
        return (
            <HeaderWrapper>
                <Link to="/"><img src={Logo} alt="Forky's logo"/></Link>
                <FaAlignRight className="toggle-icon" onClick={() => {handleNavbar()}}></FaAlignRight>
            </HeaderWrapper>
        )
    }
}

const HeaderWrapper = styled.div`
    padding: 0.4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .toggle-icon {
        font-size: 1.75rem;
        color: ${styles.colors.mainYellow}; 
        cursor: pointer;
    }
    @media (min-width:768px) {
        .toggle-icon {
            display: none;
        }
    }

`