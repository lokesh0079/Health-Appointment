  import {  configureStore} from "@reduxjs/toolkit";
  import filterSlices from "./filter";
  import favouriteReducer from "./favouriteSlice";
  import AddDoctorSlice from "./DoctorSlice";
  import appointmentSlice from "./appointmentSlice"
  const store=configureStore({
      reducer: {
      filters: filterSlices,
      favourites:favouriteReducer,
      addDoctor:AddDoctorSlice,
      MyBookAppointment:appointmentSlice,
    }
  });

  // Auto-sync Redux favorites with localStorage on every change
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("savedDoctor", JSON.stringify(state.favourites));
  });
  export default store;


