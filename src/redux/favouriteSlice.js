import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice=createSlice({
  name:"favourites",
  initialState:[],
  reducers:{
    addFavourite:(state,action)=>{
      state.push(action.payload)
    },
    removeFavourite:(state,action)=>{
      return state.filter((doctor)=>doctor.id !==action.payload)
    }
  }
})

export const favouriteActions=favouriteSlice.actions;
export default favouriteSlice.reducer;


