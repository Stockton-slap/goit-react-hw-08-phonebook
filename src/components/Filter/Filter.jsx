import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

import {
  Wrapper,
  FilterLabel,
  FilterValue,
  FilterTitle,
} from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    dispatch(updateFilter(value));
  };

  return (
    <Wrapper>
      <FilterTitle>Contacts</FilterTitle>
      <FilterLabel htmlFor="text">
        Find contacts by name
        <br />
      </FilterLabel>
      <FilterValue
        id="text"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Filter;
