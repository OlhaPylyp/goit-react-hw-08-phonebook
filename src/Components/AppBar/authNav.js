import { NavLink } from "react-router-dom";
import styles from "../../Routes/Route.module.css";

const AuthNav = () => (
  <div>
<ul className={styles.list}>
  <li className={styles.item}>
    <NavLink
      to="/Login"
      className={styles.NavLink}
      activeClassName={styles.NavLinkActive}
    >
      Login
    </NavLink>
  </li>
  <li className={styles.item}>
    <NavLink
      to="/Register"
      className={styles.NavLink}
      activeClassName={styles.NavLinkActive}
    >
      Register
    </NavLink>
  </li>
</ul>  </div>)
export default AuthNav;