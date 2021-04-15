import NavBar from "./navbar";
import Banner from "./banner";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Banner>
        We have&nbsp;
        <Link href="/rebranded">
          <a>rebranded!</a>
        </Link>
      </Banner>
      <NavBar />
    </header>
  );
}
