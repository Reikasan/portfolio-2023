import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA4Manager: React.FC = () => {
    const location = useLocation();
    const ga4MeasurmentId = process.env.REACT_APP_GA4_MEASUREMENT_ID || '';
    useEffect(() => {
      ReactGA.initialize(ga4MeasurmentId);
      ReactGA.send({
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title
      });
    }, [location]);
    return null;
  };

  export default GA4Manager;