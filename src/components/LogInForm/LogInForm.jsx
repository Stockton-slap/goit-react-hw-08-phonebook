import {
  LogInFormContainer,
  Form,
  LogInFormLabel,
  LogInFormValue,
  LogInFormBtn,
  LogInFormTitle,
} from './LogInForm.styled';

import { logIn } from 'redux/authOperations';

import { useDispatch } from 'react-redux';

const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <LogInFormContainer>
      <Form onSubmit={handleSubmit}>
        <LogInFormTitle>SIGN IN</LogInFormTitle>

        <LogInFormLabel htmlFor="email">
          Email <br />
        </LogInFormLabel>
        <LogInFormValue
          id="email"
          type="text"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          title="Email must include '@'"
          required
        />

        <LogInFormLabel htmlFor="password">
          Password <br />
        </LogInFormLabel>
        <LogInFormValue
          id="password"
          type="text"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="At least one number and one uppercase and lowercase letter, and at least 6 or more characters"
          placeholder="At least 6 characters"
          required
        />
        <LogInFormBtn type="submit">Sign in</LogInFormBtn>
      </Form>
    </LogInFormContainer>
  );
};

export default LogInForm;
