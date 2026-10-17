import { useDispatch } from "react-redux";
import { filterActions } from "../redux/filter";

const FeeFilter=( {handleFeeFilter})=>{
  const dispatch=useDispatch();
  return (
<>
<select name="" id=""   onChange={(event)=> dispatch(filterActions.setFee(event.target.value))}>
  <option value="">All Fee</option>
  <option value="under500">Under ₹500</option>
  <option value="500-800">₹500–₹800</option>
  <option value="above800"> Above ₹800</option>
  
</select>
</>
  )
}

export default FeeFilter;

