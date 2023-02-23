import {createSlice} from '@reduxjs/toolkit';

interface authType {
  status: Boolean;
  token: string;
  userinfo: any;
}

const initialState: authType = {
  status: false,
  token: '',
  userinfo: {},
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;

      state.token = action.payload;
    },

    setUserInfo: (state, action) => {
      state.userinfo = action.payload;
    },
    logout: state => {
      state.status = false;
      state.token = '';
    },
  },
});

export const {login, logout, setUserInfo} = authSlice.actions;

export default authSlice.reducer;
