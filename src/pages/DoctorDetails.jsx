import { useNavigate, useParams } from "react-router-dom";
import doctors from "../data/doctors";
import InvalidId from "../components/InvalidId";

const DoctorDetails = () => {
  const { id } = useParams();

  const doctor = doctors.find(
    (doctor) => doctor.id === Number(id)
  );

  const navigate = useNavigate();

  const BackToHome = () => {
    navigate("/");
  };

  const BookAppointmentPage = () => {
    navigate(`/bookappointment-page/${doctor.id}`);
  };

  return (
    <>

      <section className="bg-light min-vh-100 py-5">

        <div className="container">

          <h1 className="text-center fw-bold mb-5">
            Doctor Details
          </h1>

          {doctor ? (

            <div className="card border border-light shadow-sm mx-auto"
              style={{ maxWidth: "750px" }}
            >

              <div className="card-body p-4 p-md-5">

                <div className="text-center">

                  <p className="text-muted mb-2">
                    Doctor Profile
                  </p>

                  <h2 className="fw-bold mb-2">
                    {doctor.name}
                  </h2>

                  <p className="text-primary fw-semibold mb-4">
                    {doctor.specialization}
                  </p>

                </div>

                <hr />

                <div className="row text-center py-3">

                  <div className="col-md-6 mb-3 mb-md-0">
                    <small className="text-muted d-block">
                      Experience
                    </small>

                    <strong>
                      {doctor.experience}
                    </strong>
                  </div>

                  <div className="col-md-6">
                    <small className="text-muted d-block">
                      Consultation Fee
                    </small>

                    <strong>
                      ₹{doctor.fee}
                    </strong>
                  </div>

                </div>

                <hr />

                <div className="py-3">

                  <h5 className="fw-bold mb-3">
                    About the Doctor
                  </h5>

                  <p className="text-muted mb-0">
                    {doctor.details}
                  </p>

                </div>

                <div className="d-flex justify-content-center gap-2 mt-4">

                  <button
                    className="btn btn-primary"
                    onClick={BookAppointmentPage}
                  >
                    Book Appointment
                  </button>

                  <button
                    className="btn btn-outline-secondary"
                    onClick={BackToHome}
                  >
                    Home Page
                  </button>

                </div>

              </div>

            </div>

          ) : (

            <InvalidId />

          )}

        </div>

      </section>

    </>
  );
};

export default DoctorDetails;