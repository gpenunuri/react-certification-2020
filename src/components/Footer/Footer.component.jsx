import React from 'react';
import { Link } from 'react-router-dom';
import FooterStyles from './Footer.styles';

function Header() {

  return (
      <FooterStyles className="footer">
        <div className="footer__text-box">
          <Link to="/" className="footer__logo-link">
            <img src="round-logo.png" alt="Wizeline logo" className="footer__round-logo" />
            <img src="logo-light.png" alt="Wizetube logo" className="footer__logo" />
          </Link>
          <Link to="about" className="footer__about-link">
            <p>About</p>
          </Link>
        </div>
      </FooterStyles>
  )
}

export default Header;
