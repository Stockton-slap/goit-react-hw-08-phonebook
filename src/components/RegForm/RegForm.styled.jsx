import styled from 'styled-components';

export const RegFormContainer = styled.div`
  width: 500px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px;
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
`;

export const RegFormBtn = styled.button`
  margin-top: 20px;
  width: 100%;
`;
