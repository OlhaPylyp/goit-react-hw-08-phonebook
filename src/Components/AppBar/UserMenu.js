import { connect } from "react-redux";
import { getUsername } from "../../Redux/auth/auth_selector";
import { NavLink } from "react-router-dom";
import styles from "../../Routes/Route.module.css";
import axios from "axios";


const token={
  set(token) {axios.defaults.headers.common.Authorization = `Bearer ${token}`;}
}
const UserMenu = ({ name, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  name: getUsername(state),
});

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

export default connect(mapStateToProps)(UserMenu);
