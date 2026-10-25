import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice=createSlice({
  name: "appointments",
  initialState:[],
  reducers:{
    addAppointment:(state,action)=>{
      state.push(action.payload)
    },
    cancelAppointment:(state,action)=>{
    const appointmentCancelled=state.find((appointment)=> appointment.id===action.payload);

if(appointmentCancelled){
appointmentCancelled.status="Cancelled"
}
    }
  }
});

export default appointmentSlice.reducer;
export const appointmentSliceActions=appointmentSlice.actions
