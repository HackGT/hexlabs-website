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
        href: "/about",
      },
      // {
      //   name: "Team",
      //   href: "",
      // },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Connect with us",
    links: [
      {
        name: "Email",
        href: "mailto:hello@hack.gt",
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/TheHexLabs",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/thehackgt/",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/thehexlabs/",
      },
      {
        name: "Twitter",
        href: "https://twitter.com/TheHexLabs",
      },
      {
        name: "GitHub",
        href: "https://github.com/HackGT",
      },
    ],
  },
  // {
  //   title: "Account",
  //   links: [
  //     {
  //       name: "Log in",
  //       href: "/",
  //     },
  //     {
  //       name: "Sign up",
  //       href: "/",
  //     },
  //   ],
  // },
];

const lastColumn: FooterColumn = {
  title: "Made with love by HexLabs",
  links: [
    // {
    //   name: "Terms of Service",
    //   href: "/",
    // },
    // {
    //   name: "Privacy Policy",
    //   href: "/",
    // },
    // {
    //   name: "API",
    //   href: "/",
    // },
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
