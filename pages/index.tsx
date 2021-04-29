import { GetServerSideProps } from "next";
import Hex from "../components/hex";
import { Button, ButtonType } from "../components/button";
import Link from "next/link";
import Card from "../components/card";

interface Props {}

export default function Home(props: Props) {
  return (
    <>
      <section className="splash splash-main">
        <div className="max-width-400">
          <h1>HexLabs</h1>
          <Link href="/about">
            <a className="button-link-solid">Learn More</a>
          </Link>
        </div>
        <div className="hex-container" >
          {/* middle */}
          <Hex
            x="4%"
            y="9%"
            size={275}
            color="rgba(255,255,255,0.2)"
            rotation={-45}
          />

          {/* top right */}
          <Hex
            x="33%"
            y="-23%"
            size={350}
            color="transparent"
            borderSize={4}
            borderColor="rgba(255, 255, 255, 0.2)"
            rotation={45}
          />

          <Hex
            x="40%"
            y="-50%"
            size={475}
            image="/splash.png"
            imageDy={300}
            rotation={45}
          />

          {/* bottom left */}
          <Hex
            x="-1%"
            y="58%"
            size={150}
            color="rgba(255,255,255,0.5)"
            rotation={45}
          />
          <Hex
            x="-3%"
            y="81%"
            size={100}
            color="transparent"
            borderSize={5}
            borderColor="white"
            rotation={-45}
          />
        </div>
      </section>

      <section>
        <h2>About Us</h2>
        <p>
          HexLabs is a student-led, nonprofit organization that throws large-scale hackathons to spread the opportunity for innovation to high school and college students. We partner with companies to cultivate an environment of enrichment and growth for our participants to be able to learn new skills and use them to bring new ideas to life.
        </p>
        <div className="hex-container">
          <Hex
            x="-25%"
            y="88%"
            size={100}
            color="transparent"
            borderSize={5}
            borderColor="rgba(51,194,255,0.3)"
            rotation={45}
          />
        </div>
      </section>

      <section>
        <h2>Say Hello to HexLabs</h2>
        <p>
          We’re HexLabs, the new parent organization overseeing familiar events like HackGT, HackGTeeny, Catalyst, BuildGT, HealthTech, and Horizons. Learn more about our new parent organizatinon which will be our driving foce behind our mission to cultivate innovative spaces for students to work together.
        </p>
        <Link href="/rebranded">
          <a className="button-link-solid">Learn More</a>
        </Link>
      </section>
      <section>
        <h2>Community Initiatives</h2>
        <div className="container">
          <Card
            header="Getting Involved"
            coverImage="home-intouch-involved.jpg"
            buttons={
              <>
                <Link href="/get-involved">
                  <a className="button-link-solid">Learn More</a>
                </Link>
              </>
            }
          >
            Learn more about how you can get involved with HexLabs as an organizer, participant, mentor, sponsor, and more!
          </Card>
          <Card
            header="Discord"
            coverImage="home-discord.jpeg"
            buttons={
              <>
                <a href="https://discord.gg/RfNZxzNb" className="button-link-solid">Join Us</a>
              </>
            }
          >
            Join the Hex Commons, a supportive community of like-minded creators.
          </Card>
        </div>
        <div className="hex-container">
          <Hex
            x="-40%"
            y="72%"
            size={450}
            color="rgba(123,105,236,0.3)"
            rotation={-45}
          />
          <Hex
            x="21%"
            y="84%"
            size={250}
            color="transparent"
            borderSize={5}
            borderColor="rgba(51,194,255,0.3)"
            rotation={45}
          />
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  // Make request here for data
  return {
    props: {}, // will be passed to the page component as props
  };
};
