import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const User = createAsyncThunk("user/update", async (user) => {
  const response = await axios.post(
    'http://localhost:4000/api/login',
    user
  );
  console.log(response.data)
  localStorage.setItem('user',JSON.stringify(response.data))
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo:[],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [User.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [User.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [User.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;
