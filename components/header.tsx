import NavBar from "./navbar";
import Banner from "./banner";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Banner>
        <Link href="https://2021.hack.gt">
          <a>HackGT 8</a>
        </Link> registrations are open! 
        Register 
        <Link href="https://registration.hack.gt">
          <a>here</a>
        </Link>
      </Banner>
      <NavBar />
    </header>
  );
}
