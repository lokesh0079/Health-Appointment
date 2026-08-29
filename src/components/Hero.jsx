
const HeroList = ({SearchInput,handleSearch,search}) => {
  
  return (
    <>
       <section>
      <div className="container text-center py-4">
        <h1 className="text-center fw-bold mb-2">Find the right doctor for your health</h1>
        <p className="lead text-muted mb-4"> Book appointments with trusted doctors</p>
      

        <div className="input-group mx-auto">
          <input type="search" className="form-control" placeholder="Search For a Doctor" onChange={SearchInput}/>
          <button className="btn btn-primary"
onClick={() => handleSearch(search)}>Find Doctor</button>
        </div>
      </div>
      </section>
    </>
  );
};

export default HeroList;
