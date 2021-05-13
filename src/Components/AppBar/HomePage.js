import styles from "./AppBar.module.css";
import phoneBook from "../../image/2.jpg";

const HomePage = () => (
  <div className={styles.title}>
    <h2>My privat PhoneBook</h2>
    {/* <img src={phoneBook} width="350" alt="PhoneBook" /> */}
  </div>
);
export default HomePage;
