const FeeFilter=( {handleFeeFilter})=>{
  return (
<>
<select name="" id=""   onChange={handleFeeFilter}>
  <option value="">All Fee</option>
  <option value="under500">Under ₹500</option>
  <option value="500-800">₹500–₹800</option>
  <option value="above800"> Above ₹800</option>
  
</select>
</>
  )
}

export default FeeFilter;

