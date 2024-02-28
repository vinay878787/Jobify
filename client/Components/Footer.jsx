import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.container}>
      <p>&copy;Jobify@2024</p>
      <div>Designed with 💓</div>
      <div>
        by <a href="www.linkedin.com/in/b-h-vinay-2ba6a2249">vinay</a>
      </div>
    </footer>
  );
}

export default Footer;
