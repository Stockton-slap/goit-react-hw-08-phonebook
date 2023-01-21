import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Toaster from './Toaster/Toaster';

// import { fetchCurrentUser } from 'redux/authOperations';

import AppBar from './AppBar';

import Home from 'pages/Home';
import Register from 'pages/Register';
import LogIn from 'pages/LogIn';
import Contacts from 'pages/Contacts';

import { Routes, Route } from 'react-router';

import { selectIsLoggedIn } from 'redux/selectors';

export const App = () => {
  // const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  return (
    <div>
      <AppBar />

      <div style={{ padding: '50px' }}>
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        )}
      </div>
      <Toaster />
    </div>
  );
};
