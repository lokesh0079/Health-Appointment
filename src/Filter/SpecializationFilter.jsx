const DoctorFilter=({handleFilterSpecialization})=>{
  return(
    
         <select
        className="form-select"
        onChange={handleFilterSpecialization}
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