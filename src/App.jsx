import "bootstrap/dist/css/bootstrap.min.css" 
import './App.css'
import Header from './components/HeaderName'
import HeroList from './components/Hero'
import DoctorList from './components/Doctors'
import Footer from './components/Footer'
import doctors from "./data/doctors";
import Specialization from "./components/Specialization"

import { useEffect, useState } from "react"


  

function App() {
  const [search, setSearch]=useState("")
 const [filteredDoctors, setFilteredDoctors] = useState(doctors);
const [location, setLocation]=useState("")
const [specialization, setSpecialization]=useState("");
const [searchInput, setSearchInput] = useState("");
const [fee, setFee]=useState("");


  
   const SearchInput=(event)=>{
setSearchInput(event.target.value)

   }
  
  const handleSearch = () => {
    setSearch(searchInput);
  };

 const handleFilterSpecialization = (event) => {
  setSpecialization(event.target.value);
};

const handleLocationFilter = (event) => {
  setLocation(event.target.value);
};

const handleFeeFilter=(event)=>{
setFee(event.target.value)
}

  const FilterDoctor=()=>{
    const resultFiltering=doctors.filter(

      (doctor)=>{
           const specializationMatch =
           specialization==="" ||
           doctor.specialization===specialization;

           const locationMatch=
           location==="" ||
           doctor.location===location;

           const searchMatch=
           search==="" ||
           doctor.name.toLowerCase().includes(search.toLowerCase());

                const feeMatch=
           fee==="" || fee==="under500" && doctor.fee<500 || fee==="500-800" && doctor.fee >=500 && doctor.fee<=800 || fee==="above800" && doctor.fee>800
           return specializationMatch && locationMatch && searchMatch &&feeMatch;

      
           
      }
    )
    setFilteredDoctors(resultFiltering)
    
} 

useEffect(()=>{
      FilterDoctor();
    },[specialization,location,search,fee])
  return (
    <>
    <Header></Header>
    <HeroList SearchInput={SearchInput}   handleSearch={handleSearch} handleFilterSpecialization={handleFilterSpecialization}  handleLocationFilter={handleLocationFilter} handleFeeFilter={handleFeeFilter}></HeroList>
    
    <DoctorList doctors={filteredDoctors}></DoctorList>
   
    <Specialization/>
    <Footer></Footer>
    </>
  )
}

export default App;





