import styled from 'styled-components';

export const RegFormContainer = styled.div`
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px;

  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const RegFormTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const RegFormLabel = styled.label`
  margin-bottom: 5px;
  margin-top: 10px;
  padding-left: 10px;
  font-weight: 700;
`;

export const RegFormValue = styled.input`
  height: 20px;
  padding-left: 5px;

  transition: all 300ms ease-in-out;

  &:focus {
    border-color: #ff7b00;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    outline: none;
    border-radius: 5px;
  }
`;

export const RegFormBtn = styled.button`
  margin-top: 40px;
  height: 30px;
  background-color: #ff7b00;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
`;
