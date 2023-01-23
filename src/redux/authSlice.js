import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

import { toast } from 'react-toastify';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  token: null,
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
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.rejected](state, action) {
      state.isError = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
      toast.error('Oops, something went wrong.');
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logIn.rejected](state, action) {
      state.isError = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
      toast.error('Oops, something went wrong.');
    },

    [logOut.fulfilled](state) {
      state.user.name = '';
      state.user.email = '';
      state.user.password = '';
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [logOut.pending](state) {
      state.isLoading = true;
    },
    [logOut.rejected](state, action) {
      state.isError = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
      toast.error('Oops, something went wrong.');
    },

    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isError = action.payload;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
