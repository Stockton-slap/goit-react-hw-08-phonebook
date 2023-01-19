import {
  LogInFormContainer,
  Form,
  LogInFormLabel,
  LogInFormValue,
  LogInFormBtn,
  LogInFormTitle,
} from './LogInForm.styled';

const LogInForm = () => {
  return (
    <LogInFormContainer>
      <Form>
        <LogInFormTitle>SIGN IN</LogInFormTitle>

        <LogInFormLabel for="email">
          Email <br />
        </LogInFormLabel>
        <LogInFormValue
          id="email"
          autoComplete="on"
          type="text"
          value=""
          name="email"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <LogInFormLabel for="password">
          Password <br />
        </LogInFormLabel>
        <LogInFormValue
          id="password"
          autoComplete="on"
          type="text"
          value=""
          name="password"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="At least 8 characters"
          required
        />
      </Form>
      <LogInFormBtn type="button">SIGN IN</LogInFormBtn>
    </LogInFormContainer>
  );
};

export default LogInForm;
