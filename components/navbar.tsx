import styles from "./navbar.module.css";
import Link from "next/link";
import Logo from "./logo";
import { useRef } from "react";

interface NavItem {
  name: string;
  route: string;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Events",
    route: "/events",
  },
  {
    name: "Get Involved",
    route: "/get-involved",
  },
];

export default function NavBar() {
  const nav = useRef(null);
  const ham = useRef(null);
  const toggle = () => {
    ham.current.classList.toggle(styles.active);
    nav.current.classList.toggle(styles.mobile);
  };
  const onClickNav = () => {
    const isMobile = nav.current.classList.contains(styles.mobile);
    const isActive = ham.current.classList.contains(styles.active);
    if ((isMobile && isActive) || !isActive) {
      toggle(); 
    }  
  }

  return (
    <nav 
      className={styles.nav}
      ref={nav}
      onClick={onClickNav}
      >
      <div
        className={styles.hamburger}
        >
        <svg
          className={`${styles.ham} ${styles.hamRotate} ${styles.ham4}`}
          viewBox="0 0 100 100"
          width="80"
          ref={ham}
        >
          <path
            fill="#fff"
            className={`${styles.line} ${styles.top}`}
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path
            fill="#fff"
            className={`${styles.line} ${styles.middle}`}
            d="m 70,50 h -40"
          />
          <path
            fill="#fff"
            className={`${styles.line} ${styles.bottom}`}
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
      <div 
        className={styles.content}
      >
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <ul>
            {navItems.map(({ name, route }, idx) => (
              <li key={idx}>
                <Link href={route}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
            <li>
              <div className={styles.button}>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
