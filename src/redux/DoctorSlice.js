import { createSlice } from "@reduxjs/toolkit";
import doctors from "../data/doctors";


const AddDoctorSlice=createSlice({
  name:'addDoctor',
  initialState:doctors,
  reducers:{
    addDoctor:(state,action)=>{
      state.push(action.payload)
    }
  }
})


export default AddDoctorSlice.reducer;
export const AddDoctorActions=AddDoctorSlice.actions;