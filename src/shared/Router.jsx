import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyledContainer from '../styles/LayoutStyle';
import Main from '../routes/Main/Main';
import Home from '../routes/Home/Home';
import Detail from '../routes/Detail';
import Edit from '../routes/Edit';
import Search from '../routes/Search';

function AppRouter() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </StyledContainer>
    </Router>
  );
}

export default AppRouter;
