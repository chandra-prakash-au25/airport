import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const register = createAsyncThunk("user2/update", async (user) => {

  const response = await axios.post(
    "http://localhost:4000/api/register",
    user
  );
    alert("user created")
  return response.data;
});

export const registerSlice = createSlice({
  name: "user2",
  initialState: {
    userInfo:[],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [register.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [register.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } = registerSlice.actions;

export default registerSlice.reducer;