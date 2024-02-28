import styles from "./About.module.css";
import Footer from "../Components/Footer";
import { useToken } from "../store/AuthContext";
function About() {
  const { user } = useToken();
  return (
    <>
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
            <span className={styles.brandName}>Jobify</span> is your trusted
            partner for innovative IT solutions. With a focus on delivering
            cutting-edge technology services, we specialize in helping
            businesses of all sizes achieve their digital transformation goals.
            Our team of experienced professionals combines technical expertise
            with a deep understanding of industry trends to provide tailored
            solutions that drive growth and success. Whether you're looking to
            optimize your infrastructure, develop custom software, or enhance
            your cybersecurity, <span className={styles.brandName}>Jobify</span>{" "}
            is here to support you every step of the way.
          </p>
          <p className={styles.secondPara}>
            At <span className={styles.brandName}>Jobify</span>, we offer a
            comprehensive suite of IT services designed to meet the diverse
            needs of our clients. From IT consulting and project management to
            software development and cloud solutions, our offerings cover a wide
            range of areas to ensure that your business stays ahead in today's
            competitive landscape. Our team works closely with you to understand
            your unique requirements and develop customized solutions that align
            with your goals and objectives. With a focus on innovation,
            reliability, and customer satisfaction, we strive to exceed your
            expectations and deliver results that drive business value.
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
            src="../src/assets/info.png"
            alt="about us"
            width="500"
            height="500"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
