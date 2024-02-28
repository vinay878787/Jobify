import { NavLink } from "react-router-dom";
import styles from "../Components/NavBar.module.css";
import { useToken } from "../store/AuthContext";

function NavBar() {
  const { isLoggedIn } = useToken();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.brandName}>Jobify</div>

        <nav>
          <ul className={styles.navContainer}>
            <li>
              <NavLink to="/" className={styles.navItem}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className={styles.navItem}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={styles.navItem}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={styles.navItem}>
                Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout" className={styles.navItem}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register" className={styles.navItem}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className={styles.navItem}>
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
