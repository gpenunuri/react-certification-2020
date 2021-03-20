import styled from 'styled-components';

const HeaderStyles = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: var(--color-dark);
  padding: 2.2rem 4.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    flex-wrap: wrap;
  }

  .header__nav-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__toggle {
    cursor: pointer;
    transform: translateY(0.4rem);
  }

  .header__toggle-input {
    display: none;
  }

  .header__toggle input:checked + label span {
    background-color: transparent;
  }
  .header__toggle input:checked + label span::before {
    top: 0;
    transform: rotate(135deg);
  }
  .header__toggle input:checked + label span::after {
    top: 0;
    transform: rotate(-135deg);
  }
  .header__toggle label {
    text-align: center;
  }
  .header__toggle span {
    position: relative;
    cursor: pointer;
  }
  .header__toggle span,
  .header__toggle span::before,
  .header__toggle span::after {
    width: 3rem;
    height: 3px;
    background-color: #f3f3f3;
    display: inline-block;
  }
  .header__toggle span::before,
  .header__toggle span::after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.6s;
  }
  .header__toggle span::before {
    top: -1rem;
  }
  .header__toggle span::after {
    top: 1rem;
  }

  .header__logo {
    width: 12rem;
    margin-left: 3.2rem;
  }

  .header__figure {
    border-radius: 50px;
    height: 4.8rem;
    width: 4.8rem;
  }

  .header__user-photo {
    border-radius: 50px;
    width: 100%;
  }

  .searchbar {
    @media only screen and (max-width: 56.25em) {
      flex-basis: 100%;
      /* padding: 0 3rem; */
      order: 2;
      margin: 4rem auto 2rem auto;
    }
  }
`;

export default HeaderStyles;
