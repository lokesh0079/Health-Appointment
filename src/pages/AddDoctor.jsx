import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddDoctorActions } from "../redux/DoctorSlice";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const [name,setName]=useState("")
  const [specialization,setSpecialization]=useState("");
  const [fee,setFee]=useState("");
  const [experience,setExperience]=useState("");
  const [details,setDetails]=useState("");
  const [location,setLocation]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();


 
const handleSubmit = (event) => {
  event.preventDefault();

  const newDoctor = {
    id: Date.now(),
    name,
    specialization,
    fee: Number(fee),
    location,
    experience: Number(experience),
    details,
  };

 dispatch(AddDoctorActions.addDoctor(newDoctor));
  console.log(newDoctor);
  navigate('/')
};


  return (
   
       <div className="container py-5">
      <div className="row justify-content-center align-items-center">

        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm">
             <div className="card-body p-4 p-md-5">
              
             
                <h2 className="fw-bold text-dark mb-2">
                  Add Your Own Doctor
                </h2>
                 <p className="text-secondary mb-0">
                  Add a healthcare professional to your doctor directory.
                </p>
        <form action="" onSubmit={handleSubmit}>
           <div className="mb-3">
          <label htmlFor="fieldTextarea" className="form-label">
            Doctor Name
          </label>
          <input type="text"  name="name" value={name}  placeholder="Enter doctor's full name" required onChange={(event)=>{
            setName(event.target.value)     
          }} className="form-control" />
 </div>
   <div className="mb-3">
            <label className="form-label">
            Specialiation
            </label>
            <input type="text" name="specialization"  placeholder="e.g. Cardiologist" value={specialization} required className="form-control" onChange={(event)=>{
            setSpecialization(event.target.value)         
          }} />
            </div>
          
            <div className="mb-3">
                  <label className="form-label">
            Experience
             </label>
            <input type="number" name="experince" value={experience}    placeholder="e.g. 8" required className="form-control" min="0"  onChange={(event)=>{
            setExperience(event.target.value)         
          }}  />
             </div>
           <div className="mb-3">
                  <label className="form-label">

            Consultant Fee
             </label>
            <input type="number" name="number" className="form-control" value={fee}  placeholder="e.g. 500"  min="0" required  onChange={(event)=>{
            setFee(event.target.value)         
          }} />
            </div>
             <div className="mb-3">
                  <label className="form-label">
                    Location
                  </label>
            <input type="text" name="text" value={location} placeholder="Enter city" className="form-control" required  onChange={(event)=>{
            setLocation(event.target.value)         
          }} />
              </div>
        <div className="mb-3">
                  <label className="form-label">
                    Doctor Details
                  </label>
              <textarea
                    name="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="form-control"
                    rows="4"
                    placeholder="Describe the doctor's expertise..."
                    required
                  />
            </div>
        


          <button type="submit" className="btn btn-primary w-100">Submit Details</button>
      
        </form>
          <p className="text-center text-secondary small mt-4 mb-0">
                Add the doctor's details carefully before submitting.
              </p>

      </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default AddDoctor;
