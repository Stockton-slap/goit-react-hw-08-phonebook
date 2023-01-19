import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contactsOperations';
import { selectIsLoading, selectError } from 'redux/selectors';

import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import Navigation from './Navigation';

import Home from 'pages/Home';
import Register from 'pages/Register';
import LogIn from 'pages/LogIn';

import { ThreeDots } from 'react-loader-spinner';

import { Routes, Route } from 'react-router';

import { selectIsLoggedIn } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <header>
        <Navigation></Navigation>
      </header>

      <div style={{ padding: '50px' }}>
        {isLoggedIn ? (
          <div>
            <ContactForm />
            <Filter />
            {isLoading && !error && (
              <div style={{ fontSize: '50px' }}>
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="inherit"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </div>
            )}
            <ContactList />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />}></Route>
          </Routes>
        )}
      </div>
    </div>
  );
};
