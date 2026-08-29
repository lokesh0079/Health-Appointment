
import { useNavigate } from "react-router-dom";
import InvalidId from "./InvalidId";

const DoctorList=({doctors})=>{

   const navigate = useNavigate();



  return(

    <section>
   <div className="container py-5">
        <h2 className="text-center mb-4">
          Featured Doctors
        </h2>

        {doctors.length === 0 ? (<InvalidId/> ) : (
        
       
          <div className="row g-4">
 {doctors.map((doctor)=>(
<div className="col-12 col-md-6 col-lg-4" key={doctor.id}>
  <div className="card h-100 shadow-sm border border-light">
      
 <div className="card-body p-4">
 <h5 className="card-title fw-bold mb-3">{doctor.name}</h5>
    
    
    <p className="mb-2">
      <strong>Specialization:</strong>{" "}
      {doctor.specialization}
    </p>
  
    <p className="mb-2">
      <strong>Experience:</strong>{" "}
      {doctor.experience}
    </p>
     <p className="mb-4">
      <strong>Consultation Fee:</strong>{" "}
      ₹{doctor.fee}
    </p>

    <button className="btn btn-primary mt-3" onClick={()=>{  
     navigate(`/doctors/${doctor.id}`);   
    }}>View Profile</button>
  </div>
</div>
  
</div>
 ))}

 </div>
        )}
 </div>
</section>

  )
}

export default DoctorList;