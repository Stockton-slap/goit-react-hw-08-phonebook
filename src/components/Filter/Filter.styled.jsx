import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const FilterTitle = styled.h2`
  text-align: center;
`;

export const FilterLabel = styled.label`
  font-weight: 700;
`;

export const FilterValue = styled.input`
  height: 20px;
  width: 300px;
  padding-left: 5px;
  margin-bottom: 20px;
  transition: all 300ms ease-in-out;

  &:focus {
    border-color: #ff7b00;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    outline: none;
    border-radius: 5px;
  }
`;
