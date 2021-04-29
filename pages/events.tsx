import { GetServerSideProps } from "next";
import Card from "../components/card";
import { useMediaQuery } from "react-responsive";
import Hex from "../components/hex";

interface Props {}

const previousEvents = [
  {
    name: "Horizons 2020",
    description:
      "Horizons is an art+tech make-a-thon that encouraged participants to bring their most creative and quirky ideas to life by fiddling with the intersection of art and tech",
    coverImage: "horizons.png",
  },
];

export default function Events(props: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 1200px) {
            #splash-hex {
              display: none;
            }
          }
        `}
      </style>
      <section className="splash">
        <div className="max-width-600">
          <h1>Events</h1>
          <div className="sub-title">What is a Hackathon?</div>
          <p>
            Hackathons are 36-hour events where students from across the country
            come together for a weekend to create anything that shows off their
            creativity and passion for development. You may choose any platform,
            programming language, or format to show how you re-imagine
            solutions.
          </p>
        </div>
        <div id="splash-hex" className="hex-container">
          {isMobile ? (
            <>
              <Hex
                x="55%"
                y="10%"
                size={100}
                color="rgba(123, 105, 236, 0.4)"
                rotation={10}
              />
              <Hex
                x="35%"
                y="10%"
                size={70}
                color="transparent"
                borderColor="rgba(255, 255, 255, 0.3)"
                borderSize={2}
                rotation={40}
              />
              <Hex
                x="10%"
                y="70%"
                size={70}
                color="transparent"
                borderColor="rgba(255, 255, 255, 0.3)"
                borderSize={2}
                rotation={30}
              />
              <Hex
                x="35%"
                y="70%"
                size={150}
                image="./events.png"
                rotation={15}
                imgOffsetX={0}
                imgOffsetY={0}
              />
            </>
          ) : (
            <>
              <Hex
                x="59%"
                y="10%"
                size={200}
                color="rgba(255,255,255,0.35)"
                rotation={13}
              />
              <Hex
                x="45%"
                y="20%"
                size={125}
                color="transparent"
                borderSize={2}
                borderColor="rgba(255, 255, 255, 0.3)"
                rotation={40}
              />
              <Hex
                x="55%"
                y="20%"
                size={300}
                image="./events.png"
                rotation={15}
                imgOffsetX={0}
                imgOffsetY={0}
              />
              <Hex
                x="-3%"
                y="81%"
                size={120}
                color="transparent"
                borderSize={3}
                borderColor="rgba(255, 255, 255, 0.4)"
                rotation={45}
              />
            </>
          )}
        </div>
      </section>

      <section>
        <h2>Annual Events</h2>

        <h3>HackGT</h3>
        <p>
          HackGT is our annual flagship hackathon where students from across the
          country come together to celebrate creativity and innovation. We
          provide resources, workshops, and mentorship to allow students
          transform their imagination into reality.
        </p>
        <a className="button-link-solid">Learn more</a>

        <h3>Catalyst</h3>
        <p>
          Catalyst is HexLab’s community outreach event for high school students
          with limited STEAM exposure. Participants at Catalyst have the
          opportunity to learn about Computer Science and other related fields
          as a career path as well as be able to receive mentorship from
          industry professionals and Georgia Tech alumni.{" "}
        </p>
        <a className="button-link-solid">Learn more</a>

        <h3>HealthTech</h3>
        <p>
          HealthTech is a health-meets-tech hackathon which aims to provide more
          interdisciplinary spaces for innovation. Students from Biomedical
          Engineering, Biology, Chemistry and other related disciplines will be
          able to apply their knowledge to projects that address real and
          relevant health care problems.
        </p>
        <a className="button-link-solid">Learn more</a>
      </section>

      <section>
        <h2>Current Events</h2>

        <h3>Horizons</h3>
        <p>
          Horizons is an art-meets-tech makeathon, where the only limits are
          your imagination and time. Horizons is meant to be a place where
          participants can pursue their artistic endeavors and express
          themselves freely, using technology to widen the impact of their
          creations. At Horizons, participants will brainstorm, design, and
          create projects integrating art and technology, while attending
          workshops and mini-events.
        </p>

        <h3>BuildGT</h3>
        <p>
          BuildGT is a hardware focused hackathon that encourages students to
          focus on the physical aspects of hackathon projects, combining
          hardware and electronics with computer science. HexLabs offers a
          variety of resources, including hardware, to allow students to use
          hardware that they may not otherwise have access to. HexLabs makes an
          effort to partner with on-campus makerspaces on campus, like The Hive
          and the Invention Studio.
        </p>
      </section>

      <section>
        <h2>Previous Events</h2>

        {previousEvents.map(({ coverImage, name, description }) => (
          <Card header={name} coverImage={coverImage}>
            {description}
          </Card>
        ))}
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
