import { BrowserRouter as Router, Route } from 'react-router-dom';
import GoMainPage from './pages/';
import MainPage from './pages/MainPage';
import NotFound from '../pages/NotFound';

function router() {
  return (
    <Router>
      <Route path="/" element={<GoMainPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Router>
  );
}

export default router;
