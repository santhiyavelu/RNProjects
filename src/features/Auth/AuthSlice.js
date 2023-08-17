import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {isloggedin: false},
  reducers: {
    logIn: state => {
      state.isloggedin = true;
    },
    logOut: state => {
      state.isloggedin = false;
    },
  },
});

export const {logIn, logOut} = AuthSlice.actions;

export default AuthSlice.reducer;
