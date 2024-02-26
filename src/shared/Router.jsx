import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import { StyledContainer } from '../styles/LayoutStyle';
import Main from '../routes/Main';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Edit from '../routes/Edit';
import Search from '../routes/Search';
import Write from '../routes/Write';
import Header from 'components/layout/Header';
import YoutubeVideoList from 'components/YoutubeVideoList';

function Router() {
  return (
    <StyledContainer>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<Header />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:videoId" element={<Detail />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:keyword" element={<YoutubeVideoList searchOption="youtube" />} />
          <Route path="/write" element={<Write />} />
        </Route>
      </Routes>
    </StyledContainer>
  );
}

export default Router;
