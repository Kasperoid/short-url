import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './types/theme';
import GlobalStyles from './types/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme} />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
