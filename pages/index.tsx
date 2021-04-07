import { GetServerSideProps } from "next";
import Hex from "../components/hex";
import { Button, ButtonType } from "../components/button";
import Card from "../components/card";

interface Props {}

export default function Home(props: Props) {
  return (
    <>
      <style jsx>
        {`
          #splash {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0px;
            width: 100vw;
            background: var(--color-purple-blue);
            color: var(--color-white);
            padding: 0px 15%;
            min-height: 700px;
            overflow: hidden;
          }
        `}
      </style>

      <section id="splash">
        <div
          style={{
            maxWidth: "400px",
          }}
        >
          <h1>Hexlabs</h1>
          <p>Slogan will go here maybe or something longer yada yada yada</p>
          <Button type={ButtonType.SOLID}>Action Button</Button>
        </div>
        <div className="hex-container">
          {/* middle */}
          <Hex
            x="2%"
            y="35%"
            size={275}
            color="rgba(255,255,255,0.2)"
            rotation={-45}
          />

          {/* top right */}
          <Hex
            x="40%"
            y="-7%"
            size={300}
            color="transparent"
            borderSize={4}
            borderColor="rgba(255, 255, 255, 0.2)"
            rotation={45}
          />

          <Hex x="52%" y="-55%" size={475} image="/splash.png" rotation={45} />

          {/* bottom left */}
          <Hex
            x="5%"
            y="55%"
            size={150}
            color="rgba(255,255,255,0.5)"
            rotation={45}
          />
          <Hex
            x="-3%"
            y="88%"
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
          From throwing large-scale hackathons of upwards of 1000 people to
          small-scale hackathons and workshops, our organization aims to spread
          the spirit of application, innovation, and creativity in computer
          science education to high school and college students in and out of
          Georgia.
        </p>
        <div className="hex-container">
          <Hex
            x="-21%"
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
        <h2>Upcoming Events</h2>
        <div className="container">
          <Card
            header="Horizons"
            coverImage="horizons.png"
            buttons={
              <>
                <Button type={ButtonType.SOLID}>Event Site</Button>
                <Button type={ButtonType.TEXT}>Learn More</Button>
              </>
            }
          >
            HackGTeeny 6 was the 6th iteration of our beginner-friendly workshop
            series! Miss the event? All workshop slides and content are posted
            on the event website.
          </Card>
          <Card
            header="Horizons"
            coverImage="horizons.png"
            buttons={
              <>
                <Button type={ButtonType.SOLID}>Event Site</Button>
                <Button type={ButtonType.TEXT}>Learn More</Button>
              </>
            }
          >
            HackGTeeny 6 was the 6th iteration of our beginner-friendly workshop
            series! Miss the event? All workshop slides and content are posted
            on the event website.
          </Card>
        </div>
        <div className="hex-container">
          <Hex
            x="90%"
            y="0%"
            size={250}
            color="rgba(123,105,236,0.3)"
            rotation={45}
          />
          <Hex
            x="90%"
            y="0%"
            size={200}
            color="transparent"
            borderSize={5}
            borderColor="rgba(51,194,255,0.3)"
            rotation={-45}
          />
        </div>
      </section>

      <section>
        <h2>Community Initiatives</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className="container">
          <Card
            header="Horizons"
            coverImage="horizons.png"
            buttons={
              <>
                <Button type={ButtonType.SOLID}>Event Site</Button>
                <Button type={ButtonType.TEXT}>Learn More</Button>
              </>
            }
          >
            HackGTeeny 6 was the 6th iteration of our beginner-friendly workshop
            series! Miss the event? All workshop slides and content are posted
            on the event website.
          </Card>
          <Card
            header="Horizons"
            coverImage="horizons.png"
            buttons={
              <>
                <Button type={ButtonType.SOLID}>Event Site</Button>
                <Button type={ButtonType.TEXT}>Learn More</Button>
              </>
            }
          >
            HackGTeeny 6 was the 6th iteration of our beginner-friendly workshop
            series! Miss the event? All workshop slides and content are posted
            on the event website.
          </Card>
        </div>
        <div className="hex-container">
          <Hex
            x="-40%"
            y="82%"
            size={400}
            color="rgba(123,105,236,0.3)"
            rotation={-45}
          />
          <Hex
            x="21%"
            y="77%"
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
