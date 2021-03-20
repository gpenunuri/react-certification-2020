import { createGlobalStyle } from 'styled-components';

import futura from '../assets/fonts/futura/Futura-regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Futura-regular';
    src: url(${futura}) format('truetype');
  }
`;

export default Typography;
