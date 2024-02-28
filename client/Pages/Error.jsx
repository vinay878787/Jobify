import styles from "./Error.module.css";
import { NavLink } from "react-router-dom";
function Error() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.errorNumber}>404</div>
          <div className={styles.mainError}>SORRY! PAGE NOT FOUND </div>
          <p>
            Oops! It seems like the page you are looking to access doesn't exist
            . If you believe there's an issue , feel free to report it .
          </p>

          <div className={styles.btnContainer}>
            <NavLink to="/">
              <button className={styles.firstBtn}>return home</button>
            </NavLink>
            <NavLink to="/contact">
              <button className={styles.firstBtn}>report problem</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
