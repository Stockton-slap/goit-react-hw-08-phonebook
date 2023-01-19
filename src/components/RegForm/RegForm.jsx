import {
  RegFormContainer,
  Form,
  RegFormLabel,
  RegFormValue,
  RegFormBtn,
  RegFormTitle,
} from './RegForm.styled';

import { useDispatch } from 'react-redux';

import { register } from 'redux/authOperations';

const RegForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target.elements;

    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
  };

  return (
    <RegFormContainer>
      <Form onSubmit={handleSubmit}>
        <RegFormTitle>CREATE YOUR ACCOUNT</RegFormTitle>

        <RegFormLabel htmlFor="name">
          Your username <br />
        </RegFormLabel>
        <RegFormValue
          id="name"
          type="text"
          name="name"
          pattern="[A-Za-z]+"
          title="Letters only"
          required
          maxlength="32"
        />

        <RegFormLabel htmlFor="email">
          Email <br />
        </RegFormLabel>
        <RegFormValue
          id="email"
          type="text"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          title="Email must include '@'"
          required
        />

        <RegFormLabel htmlFor="password">
          Password <br />
        </RegFormLabel>
        <RegFormValue
          id="password"
          type="text"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="At least one number and one uppercase and lowercase letter, and at least 6 or more characters"
          placeholder="At least 6 characters"
          required
        />
        <RegFormBtn type="submit">CREATE YOUR ACCOUNT</RegFormBtn>
      </Form>
    </RegFormContainer>
  );
};

export default RegForm;
