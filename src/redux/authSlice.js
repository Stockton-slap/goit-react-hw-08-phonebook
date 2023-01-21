import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut } from './authOperations';

import { toast } from 'react-toastify';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  isLoggedIn: false,
  isError: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.pending](state, action) {
      state.isLoading = true;
    },
    [register.rejected](state, action) {
      state.user = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
      toast.error('Oops, something went wrong.');
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.pending](state, action) {
      state.isLoading = true;
    },
    [logIn.rejected](state, action) {
      state.user = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
      toast.error('Oops, something went wrong.');
    },

    [logOut.fulfilled](state) {
      state.user.name = '';
      state.user.email = '';
      state.user.password = '';
      state.user.token = null;

      state.isLoggedIn = false;
    },
    [logOut.pending](state, action) {},
    [logOut.rejected](state, action) {},
  },
});

export const authReducer = authSlice.reducer;
