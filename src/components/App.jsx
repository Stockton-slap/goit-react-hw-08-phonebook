import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contactsOperations';

import AppBar from './AppBar';
import ContactsContainer from './ContactsContainer';

import Home from 'pages/Home';
import Register from 'pages/Register';
import LogIn from 'pages/LogIn';

import { Routes, Route } from 'react-router';

import { selectIsLoggedIn } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <div style={{ padding: '50px' }}>
        {isLoggedIn ? (
          <ContactsContainer />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />}>
              {/* <Route path="/contacts" /> */}
            </Route>
            <Route path="/login" element={<LogIn />} />
          </Routes>
        )}
      </div>
    </div>
  );
};
