import { configureStore } from '@reduxjs/toolkit'
import responseReducer from '../features/counter/addSlice'
import dataReducer from '../features/counter/getSlice'
import userReducer from '../features/counter/loginSlice'
import user2Reducer from '../features/counter/registerSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    newuser: user2Reducer,
    responsedata:responseReducer,
    data:dataReducer
  },
})