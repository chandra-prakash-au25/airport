import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getdata = createAsyncThunk("data/update", async (user) => {
 const token=user['token']
 const id=user['other'].id
  console.log(user['other'].id,token)
  const response = await axios.post(
    "http://localhost:4000/api/alldata?userid=4",{headers:{
      'token': `Basic ${token}`
             },
          params:{
          "userid":id
       }
      }
  );
  console.log(response.data)
  return response.data;
});

export const getdataSlice = createSlice({
  name: "data",
  initialState: {
    alldataInfo:[],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getdata.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getdata.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [getdata.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } = getdataSlice.actions;

export default getdataSlice.reducer;