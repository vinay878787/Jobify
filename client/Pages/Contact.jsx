import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import Footer from "../Components/Footer";
import { useToken } from "../store/AuthContext";
function Contact() {
  const { user } = useToken();
  const [contactValues, setContactValues] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  if (userData && user) {
    setContactValues({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  useEffect(() => {
    const loadMap = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoaded(true);
    };
    loadMap();
  }, []);

  const handleInputChange = (e) => {
    setContactValues({ ...contactValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactValues);

    try {
      let response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactValues),
      });

      if (response.ok) {
        const userData = await response.json();
        setContactValues({
          message: "",
        });
        console.log("contact Data : ", userData);
      }
    } catch (error) {
      console.log("error posting contact values to db ", error);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src="../src/assets/network.png" alt="contactImg"></img>
        </div>

        <div>
          <h1 className={styles.registerHeading}>Contact Us</h1>
          <form onSubmit={handleSubmit} className={styles.registerContainer}>
            username:
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                id="username"
                value={contactValues.username}
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
                value={contactValues.email}
                onChange={handleInputChange}
                autoComplete="off"
                required
              ></input>
            </label>
            message:
            <label htmlFor="message">
              <textarea
                className={styles.textarea}
                rows="10"
                cols="30"
                type="text"
                name="message"
                id="message"
                value={contactValues.message}
                onChange={handleInputChange}
                autoComplete="off"
                required
              ></textarea>
            </label>
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <section className={styles.maps}>
        {isLoaded ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5665920656!2d77.46612495987436!3d12.954280237773864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708596986304!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <div className={styles.mapLoader}>Loading map...</div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Contact;
