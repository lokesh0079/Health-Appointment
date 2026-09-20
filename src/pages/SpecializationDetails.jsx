import { Link, useParams } from "react-router-dom";
import specializationInfo from "../data/SpecializationInfo";
import styles from "../styles/SpecializationError.module.css";

const SpecializationDetails = () => {
const {id}=useParams()
  const specialization=specializationInfo.find((item)=> item.id===Number(id))


  if (!specialization) {
    return (
          <div className={styles.errorPage}>
       <div className={styles.errorCard}>
          <div className={styles.errorIcon}>   ✚</div>
         <div className={styles.errorNumber}> 404</div>
          <h1 className={styles.errorTitle}> </h1>
              
          <p className={styles.errorMessage}>
            We couldn't find the specialization you're looking for.
            It may have been removed or the link may be incorrect.
          </p>

   <div className={styles.errorButtons}>
   <Link to="/" className={`btn btn-primary ${styles.errorButton}`}>
            Go to Home
          </Link>
              <Link
            to="/doctors"
              className={`btn btn-outline-primary ${styles.errorButton}`}
          >
            Find Doctors
          </Link>
</div>

        </div>

      </div>

    )
  }
  return (

      <section className={styles.page}>
      <div className="container py-5">

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>
            Medical Specialization
          </span>

          <h1>{specialization.name}</h1>

          <p>
            {specialization.shortDescription}
          </p>
        </div>

        {/* Overview */}
        <div className={styles.section}>
          <h2>Overview</h2>
          <p>{specialization.overview}</p>
        </div>

        {/* Conditions */}
        <div className={styles.section}>
          <h2>Common Conditions</h2>

          <div className="row g-3">
            {specialization.conditions.map((condition) => (
              <div className="col-md-6" key={condition}>
                <div className={styles.item}>
                  {condition}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Symptoms */}
        <div className={styles.section}>
          <h2>Common Symptoms</h2>

          <div className="row g-3">
            {specialization.symptoms.map((symptom) => (
              <div className="col-md-6" key={symptom}>
                <div className={styles.item}>
                  {symptom}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnosis */}
        {specialization.diagnosis && (
          <div className={styles.section}>
            <h2>Diagnosis</h2>

            <div className="row g-3">
              {specialization.diagnosis.map((diagnosis) => (
                <div className="col-md-6" key={diagnosis}>
                  <div className={styles.item}>
                    {diagnosis}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Treatments */}
        <div className={styles.section}>
          <h2>Common Treatments</h2>

          <div className="row g-3">
            {specialization.treatments.map((treatment) => (
              <div className="col-md-6" key={treatment}>
                <div className={styles.item}>
                  {treatment}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* When to visit */}
        {specialization.whenToVisit && (

          //when a specialization data doesn't have whenToVisit Info
          <div className={styles.visitBox}>
            <h2>When Should You Visit a Specialist?</h2>

            <p>{specialization.whenToVisit}</p>

            <Link to="/doctors" className="btn btn-primary">
              Find Doctors
            </Link>
          </div>
        )}

      </div>
    </section>
  ) 
   
  
};
export default SpecializationDetails;
