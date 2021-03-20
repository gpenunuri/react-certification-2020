import React from 'react';

import SearchbarStyles from './Searchbar.styles';

function Searchbar() {

  return (
    <SearchbarStyles className="searchbar">
        <input type="text" placeholder="Wizeline" className="searchbar__input" />
        <button type="submit" className="searchbar__button">
            SEARCH
        </button>
    </SearchbarStyles>
  )
}

export default Searchbar;
