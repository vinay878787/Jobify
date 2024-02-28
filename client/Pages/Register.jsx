import { useState } from "react";
import Footer from "../Components/Footer";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useToken } from "../store/AuthContext";
function Register() {
  const [registerValues, setRegisterValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenLs } = useToken();
  const handleInputChange = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerValues);

    try {
      var response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerValues),
      });
    } catch (error) {
      console.log(error);
    }
    if (response.ok) {
      const resData = await response.json();
      setRegisterValues({
        username: "",
        email: "",
        phone: "",
        password: "",
      });
      console.log(resData);
      storeTokenLs(resData.token);
      alert("registration successful...");
      navigate("/login");
    } else {
      alert("registration unsuccessful...");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src="../src/assets/registerPage.png" alt="registerImg"></img>
        </div>

        <div>
          <h1 className={styles.registerHeading}>Registration </h1>
          <form onSubmit={handleSubmit} className={styles.registerContainer}>
            username:
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                id="username"
                value={registerValues.username}
                onChange={handleInputChange}
                autoComplete="off"
                required
              ></input>
            </label>
            email:
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                value={registerValues.email}
                onChange={handleInputChange}
                autoComplete="off"
                required
              ></input>
            </label>
            phone:
            <label htmlFor="phone">
              <input
                type="number"
                name="phone"
                id="phone"
                value={registerValues.phone}
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
                value={registerValues.password}
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

export default Register;
