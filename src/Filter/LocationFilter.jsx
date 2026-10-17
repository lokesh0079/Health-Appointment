import { useDispatch } from "react-redux";
import { filterActions } from "../redux/filter";

const LocationFilter=({handleLocationFilter})=>{
  const dispatch=useDispatch()
  return (
 <select
        className="form-select"
        onChange={(event)=> dispatch(filterActions.setLocation(event.target.value)) }
      >
         <option value="">All Location</option>
          <option value="Pune">Pune</option>
           <option value="Mumbai">Mumbai </option>
            <option value="Nashik">Nashik</option>
             <option value="Shirpur">Shirpur</option>
      </select>
  )
}

export default LocationFilter;