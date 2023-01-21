import {
  RegFormContainer,
  Form,
  RegFormLabel,
  RegFormValue,
  RegFormBtn,
  RegFormTitle,
} from './RegForm.styled';

import { useDispatch, useSelector } from 'react-redux';

import { register } from 'redux/authOperations';

import { selectIsAuthLoading } from 'redux/selectors';
// selectIsError;

const RegForm = () => {
  const dispatch = useDispatch();

  // const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsAuthLoading);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
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
        <RegFormBtn type="submit">
          {isLoading ? '...Loading' : 'Create your account'}
        </RegFormBtn>
      </Form>
    </RegFormContainer>
  );
};

export default RegForm;
