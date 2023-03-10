import {
  LogInFormContainer,
  Form,
  LogInFormLabel,
  LogInFormValue,
  LogInFormBtn,
  LogInFormTitle,
} from './LogInForm.styled';

import { RotatingLines } from 'react-loader-spinner';

import { logIn } from 'redux/authOperations';

import { useDispatch, useSelector } from 'react-redux';

import { selectIsAuthLoading } from 'redux/selectors';

const LogInForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsAuthLoading);

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
          title="Email must include '@'"
          required
        />

        <LogInFormLabel htmlFor="password">
          Password <br />
        </LogInFormLabel>
        <LogInFormValue
          id="password"
          type="password"
          name="password"
          title="At least one number and one uppercase and lowercase letter, and at least 6 or more characters"
          placeholder="At least 6 characters"
          required
        />
        <LogInFormBtn type="submit">
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <RotatingLines
                strokeColor="#fff"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={true}
              />
            </div>
          ) : (
            'Sign in'
          )}
        </LogInFormBtn>
      </Form>
    </LogInFormContainer>
  );
};

export default LogInForm;
