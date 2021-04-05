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
    title: "What's up",
    links: [
      {
        name: "yo",
        href: "yea",
      },
    ],
  },
  {
    title: "What's up",
    links: [
      {
        name: "yo",
        href: "yea",
      },
    ],
  },
];

const lastColumn: FooterColumn = {
  title: "What's up",
  links: [
    {
      name: "yo",
      href: "yea",
    },
  ],
};

function FooterItem({ title, links }) {
  return (
    <div>
      <div className="bold">{title}</div>
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
      <div className={styles.columns}>{footerColumns.map(FooterItem)}</div>
      <div className="align-right">
        <FooterItem {...lastColumn} />
      </div>
    </footer>
  );
}
