import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut } from './authOperations';

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
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state) {
      state.user.name = '';
      state.user.email = '';
      state.user.password = '';
      state.user.token = null;

      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
