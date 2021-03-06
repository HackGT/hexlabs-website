import styles from "./footer.module.css";
import Logo from "./logo";

declare let ml_webform_4255780: any;

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
        href: "https://www.instagram.com/thehexlabs/",
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
  {
    title: "Join the Community",
    links: [
      {
        name: "Newsletter",
        href: "",
      },
      {
        name: "Discord",
        href: "http://discord.hexlabs.org/",
      },
    ],
  },
];

const lastColumn: FooterColumn = {
  title: "Made with love by HexLabs",
  links: [],
};

function FooterItem({ title, links }) {
  return (
    <div>
      <div className={styles["column-header"]}>{title}</div>
      <ul>
        {links.map(({ name, href }, idx) => {
          return name === "Newsletter" ?
            <li key={idx}>
              <a onClick={() => ml_webform_4255780('show')}>{name}</a>
            </li>
          :
            <li key={idx}>
              <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
            </li>
        })}
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
