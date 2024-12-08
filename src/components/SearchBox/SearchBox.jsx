import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchBox}>
      <label>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Enter name..."
        />
      </label>
    </div>
  );
};
