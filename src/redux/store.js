import {  configureStore} from "@reduxjs/toolkit";
import filterSlices from "./filter";
import favouriteReducer from "./favouriteSlice";
const store=configureStore({
    reducer: {
    filters: filterSlices,
    favourites:favouriteReducer
  }
});

export default store;


