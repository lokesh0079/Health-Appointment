import { StrictMode } from 'react'
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorDetails from './pages/DoctorDetails.jsx';
import DoctorList from './components/Doctors.jsx';
import doctors from "./data/doctors";
import BookAppointment from './pages/BookAppointment.jsx';
import AppointmentConfirm from "./pages/AppointmentConfirm";
import SpecializationDetails from './pages/SpecializationDetails.jsx';
import Specialization from './components/Specialization.jsx';
import FavouriteCart from './pages/FavouriteCart.jsx'
import AddDoctor from './pages/AddDoctor.jsx';
import MyBookings from './pages/MyBookings.jsx';



const router=createBrowserRouter([
   {
    path: "/",
    element: <App />
  },
  {
    path: "/doctors",
    element: <DoctorList doctors={doctors} />
  },
  {
    path: "/doctors/:id",
    element: <DoctorDetails />
  },{
    path: "/bookappointment-page/:id",
    element: <BookAppointment/>
  },{
     path: "/appointment-confirm",
    element: <AppointmentConfirm />,
  },
  {
    path:"/specializationinfo/:id",
    element:<SpecializationDetails/>
  },
  {
    path:"/specializationinfo",
    element:<Specialization/>
  },
  {
    path:"/favouritePage",
    element:<FavouriteCart/>
  },
  {
    path:"/add-doctors",
    element:<AddDoctor/>
  },
  {
    path:"/my-bookings",
    element:<MyBookings/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
  </StrictMode>,
)
