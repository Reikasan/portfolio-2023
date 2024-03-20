import * as React from 'react';
import './app.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cookiebot from 'react-cookiebot';
import TopPage from './pages/top-page/TopPage';

function App() {
  const cookieBotId = process.env.REACT_APP_COOKIEBOT_ID;

  if(!cookieBotId) {
    throw new Error('Cookiebot ID is not set');
  }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Cookiebot domainGroupId={cookieBotId} />
      <Routes>
        <Route path="/" element={<TopPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
