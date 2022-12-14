import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path={'/profile'} element={
            <Profile />}
          />
          <Route path='/dialogs' element={
            <DialogsContainer />}
          />
          <Route path='/news' element={<News />} />
          <Route path='/users' element={
            <UsersContainer
          />}
          />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
