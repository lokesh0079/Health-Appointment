
import { useNavigate } from "react-router-dom";
import InvalidId from "./InvalidId";
import { MdFavorite,MdFavoriteBorder } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import { favouriteActions } from "../redux/favouriteSlice";


const DoctorList=({doctors})=>{

   const navigate = useNavigate();
const dispatch=useDispatch();
const favourites=useSelector((state)=> state.favourites)


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
    }}>View Profile</button> <button type="button" className="btn btn-light ms-2" onClick={()=>{
      const isFavourite=favourites.some((fav)=> fav.id===doctor.id);

      if(isFavourite){
        dispatch(favouriteActions.removeFavourite(doctor.id))
      }
      else{
        dispatch(favouriteActions.addFavourite(doctor))
      }

    }}> {favourites.some((fav)=> fav.id===doctor.id) ? (<MdFavorite  color="red" size={22} /> ):(<MdFavoriteBorder size={22} />)}</button>
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