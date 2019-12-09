import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../utilities'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class Footer extends Component {
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
            <FooterWrapper>
               <h1 className="title">Forky's</h1>
               <p className="location">Join us, every evening at our midtown location: 850 6th Ave, New York, NY</p>
               <div className="icons">
               {this.state.icons.map(item => (<a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer">{item.icon}</a>))}
               </div>
               <p className="copyright">&copy; 2019 Forky's | A concept website by <a href="https://lbmedia.netlify.com" target="_blank" rel="noopener noreferrer">LB Media</a></p>
            </FooterWrapper>
        )
    }
}

const FooterWrapper = styled.footer`
padding: 2rem 0;
background: black;
.title {
    color: white;
    text-align: center;
    padding: 0.5rem 1rem 1.5rem 1rem;
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
}
.location {
    color: white;
    text-align: center;
    margin-bottom: 1.2rem;
}
.icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}
.icon {
    color: white;
    font-size: 1.5rem;
    ${styles.transition({})};
    &:hover {
        color: ${styles.colors.mainYellow};
    }
}
.copyright {
    color: #828282;
    text-align: center;
    margin: 1rem 0 0.1rem 0;
}
`