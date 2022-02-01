import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
:root {
    
    --font-family: 'Inter', sans-serif;
  
  
    --font-size-header: clamp(3.5rem, 12vw + 1rem, 12rem);
    --font-size-subheader: 2rem;
    --font-size-body: 1rem;
  
   
    --flex-gap: 2rem;
  
    --spacing-top-big: 3rem;
    --spacing-top-medium: 1rem;
    --spacing-bottom-big: 3rem;
    --spacing-bottom-medium: 1rem;
    --spacing-m-tb: 1rem 0;
    --spacing-m-lr: 0 1rem;
  
   
    --color-primary: hsl(42 100 55 / 100%);
    --color-primary-darker: hsl(42 100 43 / 100%);
    --color-secondary: hsl(234 14 15 / 100%);
  
    --color-background-top: hsl(235 12 18 / 100%);
    --color-light-card: hsl(255 11 28 / 100%);
    --color-white: hsl(0 0 99 / 100%);
    --color-icon: hsl(234 12 44 / 100%);
  
    
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
      --font-size-subheader: 3rem;
      --font-size-body: 1.125rem;
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
