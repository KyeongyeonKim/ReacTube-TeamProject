import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledContainer } from '../styles/LayoutStyle';
import Main from '../routes/Main';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Edit from '../routes/Edit';
import Search from '../routes/Search';
import Write from 'routes/Write';

function Router() {
  return (
    <StyledContainer>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/search" element={<Search />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </StyledContainer>
  );
}

export default Router;
