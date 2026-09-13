import { useLocation, useNavigate } from "react-router-dom";

const AppointmentConfirm = () => {
 const location = useLocation(); 
 const navigate = useNavigate();
const { doctorAppointment, patientName, email, phone, date, time, } = location.state || {};
   const BackToHomeConfirmPage = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <h2>Appointment Confirmed ✓</h2>

        <h3>Doctor Details</h3>

        <ul>
          <li>Name: {doctorAppointment.name}</li>
          <li>Specialization: {doctorAppointment.specialization}</li>
          <li>Experience: {doctorAppointment.experience} </li>
          <li>Consultation Fee: ₹{doctorAppointment.fee}</li>
        </ul>

        <h3>Patient Details</h3>

        <ul>
          <li>Name: {patientName}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>

        <h3>Appointment Details</h3>

        <ul>
          <li>Date: {date}</li>
          <li>Time: {time}</li>
        </ul>

        <button
          type="button"
          className="btn btn-primary"
          onClick={BackToHomeConfirmPage}
        >
          Back To Home
        </button>
      </div>
  
    
    
    </>
  );
};

export default AppointmentConfirm;
