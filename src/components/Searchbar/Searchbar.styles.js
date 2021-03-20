import styled from 'styled-components';

const SearchbarStyles = styled.div`
  display: flex;
  align-items: center;
  width: 46rem;

  .searchbar__input {
    border: none;
    border-radius: 50px;
    height: 4.8rem;
    width: 100%;
    padding: 0 1.8rem;
  }

  .searchbar__input:focus {
    outline: none;
  }

  .searchbar__button {
    border: none;
    border-radius: 50px;
    color: #fff;
    padding: 0 2.6rem;
    margin-left: -87px;
    height: 5rem;
    background-color: var(--color-red);

    @media only screen and (max-width: 56.25em) {
      margin-left: -83px;
    }
  }

  .searchbar__button:hover {
    cursor: pointer;
    transform: scale(1.02);
    padding: 0 2.8rem;
  }
`;

export default SearchbarStyles;
