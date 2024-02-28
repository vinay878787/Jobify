import Analytics from "../Components/Analytics";
import styles from "./Home.module.css";
import Footer from "../Components/Footer";
import { useToken } from "../store/AuthContext";

export const Home = () => {
  const { user } = useToken();
  return (
    <>
      <main>
        <section className={styles.container}>
          <div className={styles.heroContainer}>
            <p className={styles.secondPara}>
              Welcome{" "}
              {user ? `${user.username} to our website` : ` to our website`}
            </p>
            <h1 className={styles.brandTitle}>
              Welcome to <span className={styles.brandName}>Jobify</span>
            </h1>
            <p className={styles.secondPara}>
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Jobify, we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className={styles.btnContainer}>
              <a href="/contact">
                <button className={styles.firstBtn}>connect now</button>
              </a>
              <a href="/service">
                <button className={styles.secondBtn}>learn more</button>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="../src/assets/home.png"
              alt="coding together"
              width="350"
              height="350"
            />
          </div>
        </section>
      </main>

      <Analytics />

      <section className={styles.secondContainer}>
        <div className={styles.imgContainer}>
          <img
            src="../src/assets/design.png"
            alt="coding together"
            width="350"
            height="350"
          />
        </div>

        <div className={styles.secondHeroContent}>
          <p className={styles.secondPara}>We are here to help you</p>
          <h1 className={styles.brandTitle}>Get Started Today</h1>
          <p className={styles.secondPara}>
            Ready to take the first step towards a more efficient and secure IT
            infrastructure? Contact us today for a free consultation and let's
            discuss how Jobify can help your business thrive in the digital age.
          </p>
          <div className={styles.btnContainer}>
            <a href="/contact">
              <button className={styles.firstBtn}>connect now</button>
            </a>
            <a href="/service">
              <button className={styles.secondBtn}>learn more</button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
