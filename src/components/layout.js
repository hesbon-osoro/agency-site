import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { Header, Footer, GenericH2, GenericPara } from '../styles/IndexStyles';
import { Link } from 'gatsby';
import favicon from '../images/joshua-aragon-FGXqbqbGt5o-unsplash.jpg'
import Helmet from 'react-helmet';



const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link rel='icon' href={favicon} />
    </Helmet>
    <Header>
      <GenericH2 none>
        <Link to='/' style={{ color: 'white' }}>Wazimu LLC</Link>
      </GenericH2>
      <div className='menu__items'>
        <Link to='/works'>
          <GenericPara lessSize lessSpacing grey>Works</GenericPara>
        </Link>
        <Link to='/about'>
          <GenericPara lessSize lessSpacing grey>About</GenericPara>
        </Link>
      </div>
    </Header>
    {children}
    <Footer>
      <div className='icons'>
        <FontAwesomeIcon icon={faTwitter} size='2x' fixedWidth />
        <FontAwesomeIcon icon={faFacebook} size='2x' fixedWidth />
        <FontAwesomeIcon icon={faInstagram} size='2x' fixedWidth />
        <FontAwesomeIcon icon={faLinkedin} size='2x' fixedWidth />
        <FontAwesomeIcon icon={faYoutube} size='2x' fixedWidth />
        <FontAwesomeIcon icon={faPinterest} size='2x' fixedWidth />
      </div>
      <div className='copyright'>
        <span>&copy; 2021, Wazimu | </span>
        <span>Made With ❤️ and ☕️ in Kenya</span>
      </div>
    </Footer>
  </div>
)

export default Layout;