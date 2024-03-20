import * as React from 'react';
import './app.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import TopPage from './pages/top-page/TopPage';
import Cookiebot from 'react-cookiebot';
import GA4Manager from './Components/ga4-manager/ga4-manager';


function App() {
  const cookieBotId = process.env.REACT_APP_COOKIEBOT_ID || '';

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GA4Manager />
      <Cookiebot domainGroupId={cookieBotId} />
      <Routes>
        <Route path="/" element={<TopPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
