import "bootstrap/dist/css/bootstrap.min.css" 
import './App.css'
import Header from './components/HeaderName'
import HeroList from './components/Hero'
import DoctorList from './components/Doctors'
import Footer from './components/Footer'
import doctors from "./data/doctors";
import Specialization from "./components/Specialization"
import { useState } from "react"

  

function App() {
  const [search, setSearch]=useState("")
 const [filteredDoctors, setFilteredDoctors] = useState(doctors);
   const SearchInput=(event)=>{
setSearch(event.target.value)
console.log(event.target.value);

   }
   const handleSearch=(search)=>{
    const result=doctors.filter((doctor)=> doctor.name.toLowerCase().includes(search.toLowerCase()))

    
    setFilteredDoctors(result)
      
   }


  return (
    <>
    <Header></Header>
    <HeroList SearchInput={SearchInput}  handleSearch={handleSearch}   search={search}></HeroList>
    <Specialization/>
    <DoctorList doctors={filteredDoctors}></DoctorList>
    <Footer></Footer>
    </>
  )
}

export default App;
