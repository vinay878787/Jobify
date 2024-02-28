import styles from "./Analytics.module.css";
function Analytics() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.headingContainer}>50+</div>
          <div className={styles.pointer}>Registered Companies</div>
        </div>
        <span className={styles.lines}>|</span>
        <div className={styles.innerContainer}>
          <div className={styles.headingContainer}>100,00+ </div>
          <div className={styles.pointer}>Happy Clients</div>
        </div>
        <span className={styles.lines}>|</span>
        <div className={styles.innerContainer}>
          <div className={styles.headingContainer}>500+</div>
          <div className={styles.pointer}>Well Known Developers</div>
        </div>
        <span className={styles.lines}>|</span>
        <div className={styles.innerContainer}>
          <div className={styles.headingContainer}>24/7</div>
          <div className={styles.pointer}>Service</div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
