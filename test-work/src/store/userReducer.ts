import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { IUser } from '../type/types';

export const initialUserState: iniUsers = {
  users: [],
  current: [],
};

interface iniUsers {
  users: IUser[];
  current: IUser[];
}

export const getUsers = createAsyncThunk('User/getUsers', async () => {
  const data = await api.getUsers().catch((err) => console.error(err));
  return data;
});

export const userSlice = createSlice({
  name: 'User',
  initialState: initialUserState,
  reducers: {
    setCurrentUser: (state, actions) => {
      state.current = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = JSON.parse(JSON.stringify(action.payload));
      })
      .addCase(getUsers.rejected, () => {
        console.log('err');
      });
  },
});

const { reducer, actions } = userSlice;

export default reducer;
export const { setCurrentUser } = actions;
