import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./AppBar.module.css"



const Navigation = () => (
  <nav>
    <NavLink to="/" exact  className={styles.link}
            activeClassName={styles.activeLink}>
      PhoneBook
    </NavLink>

    <NavLink
            exact
            to="/Contacts"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
  </nav>
);

export default Navigation;