import React, { Component } from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utilities'

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 2,
        icon: <FaTwitter className="icon" />,
        path: `https://www.twitter.com`,
      },
      {
        id: 3,
        icon: <FaInstagram className="icon" />,
        path: `https://www.instagram.com`,
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => (
          <a
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    // margin-right: 1.5rem;
    font-size: 1.4rem;
    color: #000000;
    cursor: pointer;
    ${styles.transFunction()};
  }

  
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;
  @media (min-width: 768px) {
    width: 9rem;
    display: flex;
    justify-content: space-around;
  }
`