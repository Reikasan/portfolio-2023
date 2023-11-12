import * as React from 'react';
import './app.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TopPage from './pages/top-page/TopPage';
import Cv from './pages/cv/Cv';




function App() {
  return (
    // <div className="App">
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage/>} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
