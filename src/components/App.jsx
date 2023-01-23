import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route } from 'react-router';

import { fetchCurrentUser } from 'redux/authOperations';

import { selectIsRefreshing } from 'redux/selectors';

import AppBar from './AppBar';
import Toaster from './Toaster';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { RotatingLines } from 'react-loader-spinner';

// import Home from 'pages/Home';
// import Register from 'pages/Register';
// import LogIn from 'pages/LogIn';
// import Contacts from 'pages/Contacts';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RotatingLines
        strokeColor="#ff7b00"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  ) : (
    <div>
      <AppBar />

      <div style={{ padding: '50px' }}>
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <RotatingLines
                strokeColor="#ff7b00"
                strokeWidth="5"
                animationDuration="0.75"
                width="100"
                visible={true}
              />
            </div>
          }
        >
          <Routes>
            <Route
              exact
              path="/"
              element={<PublicRoute>{<Home />}</PublicRoute>}
            />

            <Route
              exact
              path="/contacts"
              element={<PrivateRoute>{<Contacts />}</PrivateRoute>}
            ></Route>

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
        </Suspense>
      </div>
      <Toaster />
    </div>
  );
};
