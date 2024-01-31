import { configureStore } from "@reduxjs/toolkit"
import BranchReducer from "../slices/BranchSlice"
import userReducer from '../slices/userSlice'


const store=configureStore({
  reducer:{
    branches:BranchReducer,   
    user:userReducer,

  },  
})
export default store
