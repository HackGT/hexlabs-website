import styles from "./navbar.module.css";
import Link from "next/link";

interface NavItem {
  name: string;
  route: string;
}

const navItems : NavItem[] = [
  {
    name: "home",
    route: "/"
  },
  {
    name: "about",
    route: "/about"
  },
  {
    name: "link1",
    route: "/"
  },
  {
    name: "link2",
    route: "/"
  }
];

export default function NavBar() {
  return (
    <nav
      className={styles.nav}
    >
      <ul>
        {navItems.map(({ name, route }, idx) => 
          <li key={idx}>
            <Link href={route}>
              <a>{name}</a>
            </Link>
          </li>
        )}
        <li>
          <button>Fancy button</button>
        </li>
      </ul>
    </nav>
  )
}
