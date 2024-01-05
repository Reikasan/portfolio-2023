import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const baseUrl = process.env.PUBLIC_URL;

const ogpData = {
  title: 'Reika Akuzawa Portfolio Site',
  description: 'Reika Akuzawa is a Junior Web developer based in Berlin.',
  image: `${baseUrl}/src/assets/images/ogp-img.jpg`,
  url: `${baseUrl}`,
  type: 'website',
  facebookAppId: process.env.REACT_APP_FACEBOOK_APP_ID,
};

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta property="og:title" content={ogpData.title} />
        <meta property="og:description" content={ogpData.description} />
        <meta property="og:image" content={ogpData.image} />
        <meta property="og:type" content={ogpData.type} />
        <meta property="og:url" content={ogpData.url} />

        <meta name="description" content={ogpData.description} />
        <title>{ogpData.title}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
