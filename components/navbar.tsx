import styles from "./navbar.module.css";
import Link from "next/link";
import Logo from "./logo";

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
      <div className={styles.left}>
        <Logo/>
      </div>
      <div className={styles.right}>
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
      </div>
    </nav>
  )
}
