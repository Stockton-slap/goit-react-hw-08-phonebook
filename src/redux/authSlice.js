import { createSlice } from '@reduxjs/toolkit';

import { register } from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.use;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
