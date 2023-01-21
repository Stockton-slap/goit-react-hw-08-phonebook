import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { fetchCurrentUser } from 'redux/authOperations';

import AppBar from './AppBar';
import Toaster from './Toaster';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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
            <Route
              exact
              path="/"
              element={<PublicRoute>{<Home />}</PublicRoute>}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute>{<Contacts />}</PrivateRoute>}
            ></Route>
            <Route
              exact
              path="*"
              element={<PublicRoute>{<NotFound />}</PublicRoute>}
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              exact
              path="/register"
              element={<PublicRoute restricted>{<Register />}</PublicRoute>}
            />
            <Route
              exact
              path="/login"
              element={<PublicRoute restricted>{<LogIn />}</PublicRoute>}
            />
            <Route
              exact
              path="*"
              element={<PublicRoute>{<NotFound />}</PublicRoute>}
            />
          </Routes>
        )}
      </div>
      <Toaster />
    </div>
  );
};
