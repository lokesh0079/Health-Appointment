import { useNavigate } from "react-router-dom";

const InvalidAppointmentConfirmed=()=>{

   const navigate = useNavigate();

   const HomePage=()=>{
    navigate('/')
   }
   const AppointmentPage=()=>{
    navigate('/bookappointment-page/id')
   }
return (
  <>
<h1>Appointment Details Not Found</h1>

<p>No appointment has been booked yet. Please select a doctor first and book an appointment.
</p>


<button className="btn btn-primary" onClick={HomePage}>Home Page</button>

</>
)
}

export default InvalidAppointmentConfirmed;