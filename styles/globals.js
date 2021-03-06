import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
:root {
    
    --font-family: 'Inter', sans-serif;
    --font-regular: 400;
    --font-medium: 500;
    --font-bold: 700;
  
  
    --font-size-header: clamp(3rem, 2vw + 1rem, 5rem);
    --font-size-subheader: 1.25rem;
    --font-size-body: 1rem;
  
   
    --flex-gap: 2rem;
  
    --spacing-top-big: 3rem;
    --spacing-top-medium: 1rem;
    --spacing-bottom-big: 3rem;
    --spacing-bottom-medium: 1rem;
    --spacing-m-tb: 1rem 0;
    --spacing-m-lr: 0 1rem;
  
   
    --color-primary: hsl(42 100% 55% / 100%);
    --color-primary-darker: hsl(42 100% 43% / 100%);
    --color-secondary: hsl(234 14% 15% / 100%);
  
    --color-background-top: hsl(235 12% 18% / 100%);
    --color-light-card: hsl(245 17% 28% / 20%);
    --color-white: hsl(0 0% 99% / 100%);
    --color-icon: hsl(234 12% 44% / 100%);
  
    
    --c-active: var(--color-primary);
    --c-text: var(--color-white);
    --c-bg: var(--color-secondary);
  
    
    --radius-circle: 50%;
    --radius-large: 15px;
    --radius-medium: 10px;
    --radius-small: 5px;
  
    
    --speed-base: 250ms;
    --speed-fast: 130ms;
  
    --animation-duration: var(--speed-base);
  
    
    --z-low: 10;
    --z-medium: 20;
    --z-high: 50;
  
    
    --shadow-base: 0 2px 2px 0 rgb(0 0 0 / 14%);
  }
  
  ${media.greaterThan('huge')`
    :root {
      --font-size-subheader: 1.5rem;
      --font-size-body: 1.1rem;
    }`}
  
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    background-color: var(--c-bg);
    font-family: var(--font-family);
    font-size: var(--font-size-body);
    scroll-behavior: smooth;
  }
  
`;
export default GlobalStyle;
