import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {isloggedin: false},
  reducers: {
    toggleStack: state => {
      state.isloggedin = !state.isloggedin;
    },
  },
});

export const {toggleStack} = AuthSlice.actions;

export default AuthSlice.reducer;
