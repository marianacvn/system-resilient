import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './routes';
import GlobalStyle from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Rotas />
  </React.StrictMode>,
);
