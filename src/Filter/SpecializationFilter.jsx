import { useDispatch } from "react-redux";
import { filterActions } from "../redux/filter";

const DoctorFilter=({handleFilterSpecialization})=>{

  const dispatch=useDispatch()
  return(
    
         <select
        className="form-select"
        onChange={(event)=> dispatch(filterActions.setSpecialization(event.target.value))}
      >
                <option value="">All Specializations</option>
        <option value="Cardiologist">Cardiology</option>
        <option value="Dentistry">Dentistry</option>
        <option value="Dermatologist">Dermatology</option>
        <option value="Neurologist">Neurology</option>
          <option value="General Physician">General Physician  </option>
          <option value="M.D.Physician">  M.D. Physician </option>
        

      </select>

  );
}
export default DoctorFilter;