import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoMainPage from './pages/';

function Router() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoMainPage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default Router;
