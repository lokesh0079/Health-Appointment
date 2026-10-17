import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InvalidId from "../components/InvalidId";
import { favouriteActions } from "../redux/favouriteSlice";
import { MdClose } from "react-icons/md";



const FavouriteCart = () => {
  const favouriteDoctor = useSelector((state) => state.favourites);
 const navigate = useNavigate();
 const dispatch=useDispatch();
 
  return (
  
      <div className="container py-5">
      <h3 className="mb-4">Favourite Doctors</h3>
    {favouriteDoctor.length===0 ? ( <InvalidId/> ) : (
         <div className="row g-4">
        {favouriteDoctor.map((fav) => (
          <div className="col-12 col-md-6 col-lg-4" key={fav.id}>
           <div className="card h-100 shadow-lg border border-light">
            <div className="card-body p-4 position-relative">
             <button style={{width:"40px", height:"40px"}} className="btn btn-light border border-primary position-absolute top-0 end-0 m-2 p-0 d-flex align-items-center justify-content-center" aria-label={`Remove ${fav.name} from favourites`} title={`Remove ${fav.name} from favourites`} onClick={()=>{
        dispatch(favouriteActions.removeFavourite(fav.id))
      }}>  <MdClose size={22} /> </button>
              <h5 className="card-title fw-bold mb-3 pe-4">{fav.name}</h5>
              <p className="mb-2">
      <strong>Specialization:</strong>
      {fav.specialization}
    </p>
     <p className="mb-2">
      <strong>Experience:</strong>{" "}
      {fav.experience}
    </p>
     <p className="mb-4">
      <strong>Consultation Fee:</strong>{" "}
      ₹{fav.fee}
    </p>
      <button className="btn btn-primary mt-3" onClick={()=>{
        navigate(`/doctors/${fav.id}`)
      
      }}>View Profile</button> 
            </div>
           </div>
          </div>
     
        ))}
        </div>
            )}
  
    </div>
  );
};
export default FavouriteCart;
