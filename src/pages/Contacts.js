import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { useSelector } from 'react-redux';

import { RotatingLines } from 'react-loader-spinner';

import { selectIsLoading } from 'redux/selectors';
import { selectError } from 'redux/selectors';

import { fetchContacts } from 'redux/contactsOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && !error && (
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
            width="50"
            visible={true}
          />
        </div>
      )}
      <ContactList />
    </>
  );
};

export default Contacts;
