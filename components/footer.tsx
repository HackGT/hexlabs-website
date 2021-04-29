import styles from "./footer.module.css";
import Logo from "./logo";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      {
        name: "About us",
        href: "/",
      },
      {
        name: "Team",
        href: "/",
      },
      {
        name: "Contact",
        href: "/",
      },
    ],
  },
  {
    title: "Connect with us",
    links: [
      {
        name: "Email",
        href: "/",
      },
      {
        name: "Facebook",
        href: "/",
      },
      {
        name: "Instagram",
        href: "/",
      },
      {
        name: "LinkedIn",
        href: "/",
      },
      {
        name: "Twitter",
        href: "/",
      },
      {
        name: "GitHub",
        href: "/",
      },
    ],
  },
];

const lastColumn: FooterColumn = {
  title: "Made with love by HexLabs",
  links: [
    {
      name: "Privacy Policy",
      href: "/",
    },
  ],
};

function FooterItem({ title, links }) {
  return (
    <div>
      <div className={styles["column-header"]}>{title}</div>
      <ul>
        {links.map(({ name, href }, idx) => (
          <li key={idx}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.columns}>
        {footerColumns.map((props, idx) => (
          <FooterItem {...props} key={idx} />
        ))}
      </div>
      <div className={styles.right}>
        <FooterItem {...lastColumn} />
      </div>
    </footer>
  );
}
