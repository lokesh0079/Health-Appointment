import { createSlice } from "@reduxjs/toolkit";


let initialState=[]
try{
  const favouriteStateStore=localStorage.getItem('savedDoctor');
  if(favouriteStateStore!=null){
    const JsonParse=JSON.parse(favouriteStateStore);
if(Array.isArray(JsonParse)){
  initialState=JsonParse;
}
  }
}
catch(error){
  console.log("Error is loading for saved favourites",error);

}


const favouriteSlice=createSlice({
  name:"favourites",
  initialState,
  reducers:{
    addFavourite:(state,action)=>{
      state.push(action.payload)
    },
    removeFavourite:(state,action)=>{
      return state.filter((doctor)=>doctor.id !==action.payload)
    },
  
  }
})

export const favouriteActions=favouriteSlice.actions;
export default favouriteSlice.reducer;


