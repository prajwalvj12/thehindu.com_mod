import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};
    transition: background 0.3s, color 0.3s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Custom global override for .sc-iSqusk.gQhdRB and .gQhdRB */
  .sc-iSqusk.gQhdRB, .gQhdRB {
    color: #111 !important;
    font-weight: 200 !important;
    text-decoration: underline !important;
    text-transform: uppercase !important;
    font-size: 12px !important;
  }
  body.dark-mode .sc-iSqusk.gQhdRB, body.dark-mode .gQhdRB {
    color: #fff !important;
    font-weight: 200 !important;
    text-decoration: underline !important;
    text-transform: uppercase !important;
    font-size: 12px !important;
  }
  .sc-iSqusk.gIQPdz, .gIQPdz {
    color: #fff !important;
    font-weight: 200 !important;
    text-decoration: underline !important;
    text-transform: uppercase !important;
    font-size: 12px !important;
  }

  .sc-iMGFoU.kPQdGU, .kPQdGU,
  .sc-dNpohg.jLxFIJ, .jLxFIJ {
    background: #fafafa !important;
  }
`;

export { GlobalStyle };

export const lightTheme = {
  background: '#fafafa',
  text: '#222',
  cardBg: '#fff',
  cardBorder: '#eee',
  accent: '#b3001b',
  premium: '#ffd600',
  subtleText: '#888',
  footerBg: '#fff',
};

export const darkTheme = {
  background: '#000',
  text: '#f5f5f5',
  cardBg: '#232526',
  cardBorder: '#333',
  accent: '#ff4b5c',
  premium: '#ffe066',
  subtleText: '#bbb',
  footerBg: '#232526',
}; 