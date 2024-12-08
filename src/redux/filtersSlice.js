import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Екшени
export const { changeFilter } = filtersSlice.actions;

// Селектор
export const selectNameFilter = (state) => state.filters.name;

// Редюсер за замовчуванням
export default filtersSlice.reducer;
