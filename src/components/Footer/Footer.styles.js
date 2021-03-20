import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100%;
  background-color: var(--color-dark);
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer__text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer__logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer__round-logo {
    width: 3.2rem;
    margin-right: 0.6rem;
  }

  .footer__logo {
    width: 8rem;
  }

  .footer__about-link {
    text-decoration: none;
    color: var(--color-light);
    font-size: 1.4rem;
    margin-top: 1rem;
  }

  .footer__about-link:hover {
    color: var(--color-red);
  }
`;

export default FooterStyles;
