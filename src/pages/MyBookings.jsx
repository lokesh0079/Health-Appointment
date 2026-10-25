import { useSelector,useDispatch } from "react-redux";
import { appointmentSliceActions } from "../redux/appointmentSlice";

const MyBookings=()=>{
const appointments =useSelector((state)=>(
  state.MyBookAppointment
))
const dispatch=useDispatch();
return(
 
  <div  className="container py-5">
    <h2 className="text-center fw-bold mb-4">My Bookings   <span>{appointments.length}</span> </h2>
  

  {appointments.map((appointment)=>(
<div key={appointment.id} className="container py-5">
  <div className="card shadow-sm mb-3">
    <div className="card-body">
  <h3 className="card-title fw-bold">{appointment.doctorAppointment.name}</h3>
      <p className="text-muted mb-2">{appointment.date}</p>
    <p className="text-muted mb-2">{appointment.time}</p>
    <span className={`badge ${appointment.status==="Cancelled" ? "text-bg-danger" :"text-bg-success" } `}>{appointment.status}</span>
   
   {appointment.status!== "Cancelled" && (
      <button
    className="btn btn-danger btn-sm ms-2"
    onClick={() => {

      dispatch(
        appointmentSliceActions.cancelAppointment(appointment.id)
      );
    }}
  >
    Cancel Appointment
  </button>
   )}
    </div>
    </div>
    </div>

  ))}
  </div>




)

}
export default MyBookings;