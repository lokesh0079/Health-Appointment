import "bootstrap/dist/css/bootstrap.min.css" 
import './App.css'
import Header from './components/HeaderName'
import HeroList from './components/Hero'
import DoctorList from './components/Doctors'
import Footer from './components/Footer'
import doctors from "./data/doctors";
import Specialization from "./components/Specialization"

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"
// import FavouriteCart from "./components/FavouriteCart"


  

function App() {

 const [filteredDoctors, setFilteredDoctors] = useState(doctors);

const search = useSelector((state) => state.filters.search);
const specialization = useSelector( (state) => state.filters.specialization);
const location = useSelector((state) => state.filters.location);
const fee = useSelector((state) => state.filters.fee);


 const navigate = useNavigate();
const FavouritePage=()=>{
navigate('/favouritePage') 
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
    <Header FavouritePage={FavouritePage}/>
    <HeroList/>
    <DoctorList doctors={filteredDoctors}></DoctorList>
    <Specialization/>
    <Footer/>
   
    </>
  )
}

export default App;





