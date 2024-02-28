import { useState } from "react";
import Footer from "../Components/Footer";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useToken } from "../store/AuthContext";
function Login() {
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const { storeTokenLs } = useToken();
  const handleInputChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginValues),
      });
    } catch (error) {
      console.log(error);
    }

    if (response.ok) {
      const resData = await response.json();
      storeTokenLs(resData.token);
      setLoginValues({
        email: "",
        password: "",
      });
      alert("Login successful...");
      navigate("/");
    } else {
      alert("login unsuccessful...");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src="../src/assets/login.png" alt="registerImg"></img>
        </div>

        <div>
          <h1 className={styles.registerHeading}>Login </h1>
          <form onSubmit={handleSubmit} className={styles.registerContainer}>
            email:
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                value={loginValues.email}
                onChange={handleInputChange}
                autoComplete="off"
                required
              ></input>
            </label>
            password:
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                value={loginValues.password}
                onChange={handleInputChange}
                autoComplete="off"
                required
              ></input>
            </label>
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
