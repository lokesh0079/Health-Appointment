import { useNavigate, useParams } from "react-router-dom";
import doctors from "../data/doctors";
import { useState } from "react";
import InvalidId from "../components/InvalidId";

const BookAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctorAppointment = doctors.find((doctor) => doctor.id === Number(id));

  const [email, setEmail] = useState("12@gmail.com");
  const [patientName, setPatientName] = useState("lokesh");
  const [phone, setPhone] = useState("123456");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const handleInputName = (event) => {
    setPatientName(event.target.value);
  };
  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputPhone = (event) => {
    setPhone(event.target.value);
  };
  const handleInputDate = (event) => {
    setDate(event.target.value);
  };
  const handleInputTime = (event) => {
    setTime(event.target.value);
  };
  const handleSubmitButton = (event) => {
    event.preventDefault();

    if (patientName.trim() === "") {
      setError("Please enter your name");
    } else if (email.trim() === "") {
      setError("Please enter your email");
    } else if (phone.trim() === "") {
      setError("Please enter your number");
    } else if (date.trim() === "") {
      setError("Enter the date");
    } else if (time.trim() === "") {
      setError("Enter the time");
    } else {
      setError("");

      navigate("/appointment-confirm", {
        state: {
          doctorAppointment: doctorAppointment,
          patientName,
          email,
          phone,
          date,
          time,
        },
      });
    }
  };

  return (
    <>
      <section className="bg-light min-vh-100 py-5">
        <div className="container">
          {/* Page Heading */}
          {doctorAppointment ? (
            <>
              {" "}
              {/* Page Heading */}{" "}
              <div className="text-center mb-5">
                {" "}
                <h1 className="fw-bold">Book an Appointment</h1>{" "}
                <p className="text-muted">
                  {" "}
                  Schedule your consultation with your selected doctor{" "}
                </p>{" "}
              </div>{" "}
              {/* Doctor Information */}{" "}
              <div className="card border border-light shadow-sm mb-5">
             
                <div className="card-body p-4">
                
                  <h3 className="fw-bold mb-4"> Doctor Information </h3>{" "}
                  <h4 className="fw-semibold"> {doctorAppointment.name} </h4>{" "}
                  <p className="text-primary fw-semibold mb-4">
                
                    {doctorAppointment.specialization}
                  </p>
                  <div className="row">
                    {" "}
                    <div className="col-md-6">
                      {" "}
                      <p className="mb-2">
                        {" "}
                        <strong>Experience:</strong>{" "}
                        {doctorAppointment.experience}{" "}
                      </p>{" "}
                    </div>{" "}
                    <div className="col-md-6">
                      {" "}
                      <p className="mb-2">
                        {" "}
                        <strong>Consultation Fee:</strong> ₹
                        {doctorAppointment.fee}{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* Booking Form */}{" "}
              <form onSubmit={handleSubmitButton}>
                {" "}
                {/* Patient Information */}{" "}
                <div className="mb-4">
                  {" "}
                  <h3 className="fw-bold mb-4"> Patient Information </h3>{" "}
                  <div className="row g-3">
                    {" "}
                    <div className="col-md-4">
                      {" "}
                      <label className="form-label"> Full Name </label>{" "}
                      <input
                        type="text"
                        className="form-control"
                        value={patientName}
                        onChange={handleInputName}
                        placeholder="Enter your name"
                      />{" "}
                    </div>{" "}
                    <div className="col-md-4">
                      {" "}
                      <label className="form-label"> Email Address </label>{" "}
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={handleInputEmail}
                        placeholder="Enter your email"
                      />{" "}
                    </div>{" "}
                    <div className="col-md-4">
                      {" "}
                      <label className="form-label"> Phone Number </label>{" "}
                      <input
                        type="tel"
                        className="form-control"
                        value={phone}
                        onChange={handleInputPhone}
                        placeholder="Enter your phone number"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Appointment Details */}{" "}
                <div className="mb-4">
                  {" "}
                  <h3 className="fw-bold mb-4"> Appointment Details </h3>{" "}
                  <div className="row g-3">
                    {" "}
                    <div className="col-md-6">
                      {" "}
                      <label className="form-label">
                        {" "}
                        Appointment Date{" "}
                      </label>{" "}
                      <input
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={handleInputDate}
                      />{" "}
                    </div>{" "}
                    <div className="col-md-6">
                      {" "}
                      <label className="form-label">
                        {" "}
                        Appointment Time{" "}
                      </label>{" "}
                      <input
                        type="time"
                        className="form-control"
                        value={time}
                        onChange={handleInputTime}
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Error */}{" "}
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {" "}
                    {error}{" "}
                  </div>
                )}{" "}
                {/* Submit */}{" "}
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 mt-3"
                >
                  {" "}
                  Confirm Appointment{" "}
                </button>{" "}
              </form>{" "}
            </>
          ) : (
            <InvalidId />
          )}
        </div>{" "}
      </section>
    </>
  );
};

export default BookAppointment;
