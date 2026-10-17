import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../redux/filter";
import FeeFilter from "../Filter/FeeFilter";
import LocationFilter from "../Filter/LocationFilter";
import SpecializationFilter from "../Filter/SpecializationFilter";
import styles from "../styles/Hero.module.css";

const HeroList = () => {
  const [showFilters, setShowFilters] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <section className={styles.heroSection}>
        <div className="container text-center py-4">
          <h1 className={`${styles.heroTitle} fw-bold mb-2`}>
            Find the right doctor for your health
          </h1>
          <p className={`${styles.heroSubtitle} lead text-muted mb-4`}>
            {" "}
            Book appointments with trusted doctors
          </p>

          {/* search */}

          <div className={styles.searchArea}>
            <input
              type="search"
              className={`${styles.searchInput} form-control`}
              placeholder="Search For a Doctor"
              onChange={(event) =>
                dispatch(filterActions.setSearch(event.target.value))
              }
            />
            
            <button
              className={`${styles.filterButton} btn btn-outline-primary`}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters {showFilters ? "▲" : "▼"}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className={styles.filterArea}>
              <SpecializationFilter />

              <LocationFilter />

              <FeeFilter />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroList;
