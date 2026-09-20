import { MdHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        {" "}
       <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
     
         
          <span className="health-icon"><MdHealthAndSafety /> </span>{" "}
        </Link>
        <ul className="nav nav-pills">
         
          <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
          <li className="nav-item">
            <Link to={'/doctors'} className="nav-link">Doctors</Link>
          </li>{" "}
          <li className="nav-item">
          <Link to="/specializationinfo" className="nav-link">
  Popular Specialization
</Link>
          </li>{" "}
               <li className="nav-item">
  <a href="#contact" className="nav-link">
    Contact
  </a>
</li>
        
        </ul>{" "}
      </header>
    </>
  );
};

export default Header;
