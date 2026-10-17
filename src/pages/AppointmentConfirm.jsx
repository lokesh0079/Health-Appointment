import { useLocation, useNavigate } from "react-router-dom";
import InvalidAppointmentConfirmed from "./InvalidAppointmentConfirmed";
import styles from "../styles/Appointment-confirm.module.css";

const AppointmentConfirm = () => {
 const location = useLocation(); 
 const navigate = useNavigate();
const { doctorAppointment, patientName, email, phone, date, time, } = location.state || {};
   const BackToHomeConfirmPage = () => {
    navigate("/");
  };
  return (
    <>
    {doctorAppointment ? (
      <div class="container-lg">
        <h2>Appointment Confirmed </h2>
        <p>  Your appointment has been successfully booked.</p>
<div className={styles.doctorDetails}>
        <h3>Doctor Details</h3>

        <ul>
          <li>Name:{doctorAppointment.name}</li>
          <li>Specialization:{doctorAppointment.specialization}</li>
          <li>Experience:{doctorAppointment.experience} </li>
          <li>Consultation Fee:₹{doctorAppointment.fee}</li>
        </ul>

        </div>
<div className={styles.patientDetails}>
        <h3>Patient Details</h3>

        <ul>
          <li>Name: {patientName}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
</div>

<div className={styles.appointmentDetails}>
        <h3>Appointment Details</h3>

        <ul>
          <li>Date: {date}</li>
          <li>Time: {time}</li>
        </ul>
</div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={BackToHomeConfirmPage}
        >
          Back To Home
        </button>
      </div>
  ):(<InvalidAppointmentConfirmed/>)}
    
    
    </>
  );
};

export default AppointmentConfirm;
