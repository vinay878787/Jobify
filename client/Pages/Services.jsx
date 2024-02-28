import Footer from "../Components/Footer";
import { useToken } from "../store/AuthContext";
import styles from "./Services.module.css";
function Services() {
  const { service } = useToken();
  console.log("service", service);

  if (!Array.isArray(service) || service.length === 0) {
    return <div>No services available.</div>;
  }
  return (
    <>
      <h1 className={styles.heading}>Services</h1>
      <div className={styles.container}>
        {service.map((data, index) => (
          <div className={styles.cardStyle} key={index}>
            <img
              className={styles.image}
              src="../src/assets/design.png"
              alt="Service img"
              width={300}
              height={300}
            />
            <div className={styles.firstContainer}>
              <p>{data.provider} </p>
              <p>{data.price}</p>
            </div>

            <div className={styles.secondContainer}>
              <h1>{data.service} </h1>
              <p>{data.description} </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Services;
