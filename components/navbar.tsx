import styles from "./navbar.module.css";
import Link from "next/link";
import Logo from "./logo";

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
  return (
    <nav className={styles.nav}>
      <div className={styles.hamburger}>
        hamburger
      </div>
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
    </nav>
  );
}
