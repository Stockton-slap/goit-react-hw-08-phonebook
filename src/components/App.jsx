import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router';

import { fetchCurrentUser } from 'redux/authOperations';

import AppBar from './AppBar';
import Toaster from './Toaster';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { RotatingLines } from 'react-loader-spinner';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
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
            <Route path="/" element={<PublicRoute>{<Home />}</PublicRoute>} />

            <Route
              path="/contacts"
              element={<PrivateRoute>{<Contacts />}</PrivateRoute>}
            ></Route>

            <Route
              path="/register"
              element={<PublicRoute restricted>{<Register />}</PublicRoute>}
            />

            <Route
              path="/login"
              element={<PublicRoute restricted>{<LogIn />}</PublicRoute>}
            />

            <Route
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
