import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import SimpleReactLightbox from 'simple-react-lightbox'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
          <App />
      </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);
