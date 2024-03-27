import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        //add style when the link is active
        className={({ isActive }) =>
          [isActive ? `${styles.active}` : "", `${styles.navLink}`].join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          [isActive ? `${styles.active}` : "", `${styles.navLink}`].join(" ")
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
