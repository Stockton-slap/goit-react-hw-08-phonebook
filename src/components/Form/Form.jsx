import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addContact } from 'redux/contactsOperations';
import { selectContacts } from 'redux/selectors';

import { toast } from 'react-toastify';

import {
  Form,
  ContactLabel,
  ContactValue,
  AddBtn,
  ContactTitle,
} from './Form.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const sameName = contacts.find(contact => contact.name === name);

    if (sameName) {
      toast.warning('There is already a contact with such a name.');
    } else {
      dispatch(addContact({ name, number }));
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      <ContactTitle>Phonebook</ContactTitle>

      <Form onSubmit={handleSubmit}>
        <ContactLabel htmlFor="name">
          Name
          <br />
        </ContactLabel>
        <ContactValue
          id="name"
          type="text"
          value={name}
          name="name"
          placeholder="e.g. Stephen King"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />

        <ContactLabel htmlFor="number">
          Number
          <br />
        </ContactLabel>
        <ContactValue
          id="number"
          type="text"
          value={number}
          name="number"
          placeholder="+38-000-000-00-00"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />

        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    </>
  );
};

export default ContactForm;
