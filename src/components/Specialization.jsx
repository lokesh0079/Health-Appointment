import { useState } from "react";
import { Link } from "react-router-dom";
import specializationInfo from "../data/SpecializationInfo";

const Specialization = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedSpecializations = showAll
    ? specializationInfo
    : specializationInfo.slice(0, 8);

  return (
    <section>
      <div className="container py-5">

        <h2 className="text-center mb-4">
          Popular Specializations
        </h2>

        <div className="row g-4">

          {displayedSpecializations.map((specialization) => (
            <div
              className="col-12 col-md-6 col-lg-3"
              key={specialization.id}
            >
              <Link
                to={`/specializationinfo/${specialization.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">
                      {specialization.name}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}

        </div>

        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View More..."}
          </button>
        </div>

      </div> 
    </section>
  );
};

export default Specialization; 