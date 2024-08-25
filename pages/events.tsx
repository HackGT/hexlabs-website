import Card from "../components/card";
import Hex from "../components/hex";
import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {}

const previousEvents = [
  {
    name: "Horizons 2020",
    description:
      "Horizons is an art+tech make-a-thon that encouraged participants to bring their most creative and quirky ideas to life by fiddling with the intersection of art and tech",
    coverImage: "horizons-2020.jpg",
  },
  {
    name: "HackGTeeny 6",
    description:
      "HackGTeeny 6 was the 6th iteration of our beginner-friendly workshop series! Miss the event? All workshop slides and content are posted on the event website.",
    coverImage: "hackgteeny-6.jpg",
  },
  {
    name: "Horizons 2019",
    description:
      "Horizons was HackGT’s first Art + Tech makeathon and a celebration of the arts community at Georgia Tech.",
    coverImage: "horizons-2019.jpg",
  },
  {
    name: "BuildGT 2019",
    description:
      "HackGT’s third hardware hackathon! This year, we partnered with The Invention Studio and The Hive to provide tooling, materials, and mentorship at the event!",
    coverImage: "buildgt-2019.jpg",
  },
  {
    name: "HackGTeeny 5",
    description:
      "HackGTeeny 5 was focused around helping students jump start their CS career. At the event, we offered over 5 hours of beginner-friendly workshops!",
    coverImage: "hackgteeny-5.jpg",
  },
  {
    name: "BuildGT",
    description:
      "HackGT’s second hardware hackathon! We partnered with the Invention Studio to host BuildGT, a twelve hour hackathon with beginner-friendly workshops, crash courses on Invention Studio tools, and tons of hardware.",
    coverImage: "buildgt.jpg",
  },
  {
    name: "Meme-a-thon",
    description:
      "A #spicy event centered around crazy ideas. Whether it’s a meme-based application or a random, fun project that you would love to bring to life, this is the place to be!",
    coverImage: "meme-a-thon.jpg",
  },
  {
    name: "Hardware Hackathon",
    description:
      "HackGT’s first ever Hardware Hackathon! An event focused on bringing together students who are interested in bridging the worlds of hardware, electronics, and computer science.",
    coverImage: "hardware-hackathon.jpg",
  },
  {
    name: "HackGTeeny 2",
    description:
      "HackGT’s second small-scale hackathon focused on the development of skills needed to create full-stack projects!",
    coverImage: "hackgteeny-2.jpg",
  },
  {
    name: "HackGTeeny",
    description: "HackGT’s inaugural HackGTeeny, a hackathon geared towards beginners",
    coverImage: "hackgteeny.jpg",
  },
];

export default function Events(props: Props) {
  return (
    <>
      <section className="splash">
        <div className="max-width-500">
          <Text as="h1">Events</Text>
          <Text>
            Hackathons are 36-hour events where students from across the country come together for a
            weekend to create anything that shows off their creativity and passion for development.
            You may choose any platform, programming language, or format to show how you re-imagine
            solutions.
          </Text>
        </div>
        <div className="splash-hex hex-container">
          <Hex x="59%" y="10%" size={200} color="rgba(255,255,255,0.35)" rotation={13} />
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
            image="./events.jpg"
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
        </div>
      </section>

      <section>
        <Text as="h2">Annual Events</Text>

        <Text as="h3" mb="3">
          HackGT
        </Text>
        <Text mb="3">
          HackGT is our annual flagship hackathon where students from across the country come
          together to celebrate creativity and innovation. We provide resources, workshops, and
          mentorship to allow students transform their imagination into reality.
        </Text>
        <Link href="/timeline">
          <Button colorScheme="purple">Learn More</Button>
        </Link>

        <Text as="h3" mb="3" mt="10">
          Catalyst
        </Text>
        <Text mb="3">
          Catalyst is HexLab’s community outreach event for high school students with limited STEAM
          exposure. Participants at Catalyst have the opportunity to learn about Computer Science
          and other related fields as a career path as well as be able to receive mentorship from
          industry professionals and Georgia Tech alumni.{" "}
        </Text>
        <Link href="https://catalyst.hexlabs.org">
          <Button colorScheme="purple">Learn More</Button>
        </Link>

        {/* <h3>HealthTech</h3>
        <p>
          HealthTech is a health-meets-tech hackathon which aims to provide more
          interdisciplinary spaces for innovation. Students from Biomedical
          Engineering, Biology, Chemistry and other related disciplines will be
          able to apply their knowledge to projects that address real and
          relevant health care problems.
        </p>
        <a className="button-link-solid">Learn more</a> */}
      </section>

      {/* <section>
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
      </section> */}

      <section>
        <Text as="h2">Previous Events</Text>
        <div className="container">
          {previousEvents.map(({ coverImage, name, description }) => (
            <Card header={name} coverImage={coverImage}>
              {description}
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
