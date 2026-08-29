import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorDetails from './pages/DoctorDetails.jsx';
import DoctorList from './components/Doctors.jsx';
import doctors from "./data/doctors";
import BookAppointment from './pages/BookAppointment.jsx';


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
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
