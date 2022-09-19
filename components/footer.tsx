import styles from "./footer.module.css";
import Logo from "./logo";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";

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
        name: "About Us",
        href: "/about",
      },
      {
        name: "Contact",
        href: "/contact",
      },
      {
        name: "Privacy Policy",
        href: "https://privacy.hexlabs.org",
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
    <Box>
      <Box fontWeight="600" fontSize="1.25rem">
        {title}
      </Box>
      <UnorderedList margin="0">
        {links.map(({ name, href }, idx) => {
          return name === "Newsletter" ? (
            <ListItem key={idx}>
              <Link onClick={() => ml_webform_4255780("show")}>{name}</Link>
            </ListItem>
          ) : (
            <ListItem key={idx}>
              <Link href={href}>{name}</Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Logo />
      <Box className={styles.columns}>
        {footerColumns.map((props, idx) => (
          <FooterItem {...props} key={idx} />
        ))}
      </Box>
      <Box textAlign="right">
        <FooterItem {...lastColumn} />
      </Box>
    </Box>
  );
}
