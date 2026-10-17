import { createSlice } from "@reduxjs/toolkit";

const filterSlices=createSlice({
  name:'filters',
  initialState:  {
  search: "",
  specialization: "",
  location: "",
  fee: ""
},
  reducers:{
setSearch:(state,action)=>{
  state.search=action.payload;
},
setSpecialization:(state,action)=>{
 state.specialization=action.payload;
},
setLocation:(state,action)=>{
    state.location=action.payload;

},
setFee:(state,action)=>{
  state.fee=action.payload;
}

  }
});

export const filterActions = filterSlices.actions;
export default filterSlices.reducer;