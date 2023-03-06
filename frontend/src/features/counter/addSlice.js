import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const putdata = createAsyncThunk("response/update", async (user1) => {
  const user=JSON.parse(localStorage.getItem('user'))
  const token=user['token']
  const id=user['other'].id
   console.log(user['other'].id,token)
   const response = await axios.post(
     "http://localhost:8000/api/airports",user1,{headers:{
       'token': `Basic ${token}`
              },
           params:{
           "userid":id
        }
       }
   );
   console.log(response.data,'===============')
   return response.data;
});

export const putdataSlice = createSlice({
  name: "response",
  initialState: {
    allInfo:[],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [putdata.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [putdata.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [putdata.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } = putdataSlice.actions;

export default putdataSlice.reducer;