import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar';
import HeaderStyles from './Header.styles';

function Header() {

  return (
      <HeaderStyles className="header">
          <div className="header__nav-box">
            <div className="header__toggle">
                <input type="checkbox" id="nav-toggle" className="header__toggle-input" />
                <label for="nav-toggle">
                    <span>&nbsp;</span>
                </label>
            </div>

            <Link to="/" className="header__logo-link">
                <img src="logo-light.png" alt="Wizetube logo" className="header__logo" />
            </Link>
          </div>

          <Searchbar />

          <figure className="header__figure">
              <img className="header__user-photo" src="gp-photo.png" alt="user" />
          </figure>
      </HeaderStyles>
  )
}

export default Header;
