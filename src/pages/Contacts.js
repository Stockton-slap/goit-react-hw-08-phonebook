import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { useSelector } from 'react-redux';

import { ThreeDots } from 'react-loader-spinner';

import { selectIsLoading } from 'redux/selectors';
import { selectError } from 'redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
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
    </>
  );
};

export default Contacts;
