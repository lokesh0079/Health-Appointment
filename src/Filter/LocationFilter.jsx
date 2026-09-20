const LocationFilter=({handleLocationFilter})=>{
  return (
 <select
        className="form-select"
        onChange={handleLocationFilter}
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