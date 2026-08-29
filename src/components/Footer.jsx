import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="border-top mt-5 py-4">
          <div className="container">
  <div className="row">
  <div className="col-md-6">
        <h5>Health Appointment</h5>
          <p className="text-body-secondary">
              Find trusted doctors and book appointments easily.
            </p>
               </div>

                  <div className="col-md-6">
            <h6>Quick Links</h6>
        <ul className="nav">
              <li className="nav-item">
               <Link className="nav-link px-2 text-body-secondary" to="/">
                  Home
            </Link>
              </li>

              <li className="nav-item">
             <Link className="nav-link px-2 text-body-secondary" to="/doctors">Doctors</Link>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Contact
                </a>
              </li>
            </ul>
               </div>
                  </div>
                    <hr />
                     <p className="text-center text-body-secondary mb-0">
          © 2026 Health Appointment. All rights reserved.
        </p>
     </div>
       
      </footer>
    </>
  );
};

export default Footer;
