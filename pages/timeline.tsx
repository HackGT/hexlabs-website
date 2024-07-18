import Hex from "../components/hex";
import styles from "./timeline.module.css";
import { Text } from "@chakra-ui/react";
import { Button, ButtonType } from "../components/button";

interface Props {}

interface Img {
  id: string;
  alt: string;
  path: string;
}

interface Event {
  title: string;
  dates: string;
  description: string;
  devPostLink: string;
  images: Img[];
}

const events: Event[] = [
  {
    title: "HackGT X: Journal of Memories",
    dates: "October 13 - 15, 2023",
    description:
      "HackGTs 10th annual collegiate hackathon! In 2023, 2500 participants came together to embark on a 36-hour adventure to innovate, reimagine, and shape the future. Through workshops, mentors, and tech talks from leading companies and renown leaders, we provided a surreal hackathon experience for all participants. We hoped to spark our participants’ imagination and creativity as they reimagined and created their own world!",
    devPostLink: "https://hackgt-x.devpost.com/",
    images: [
      {
        id: "X-1",
        alt: "participants smiling for a picture at HackGTX",
        path: "/hackgtx-1.png",
      },
      {
        id: "X-2",
        alt: "stuffed animals with HackGTX t-shirts",
        path: "/hackgtx-2.png",
      },
      {
        id: "X-3",
        alt: "teams working on their projects at HackGTX",
        path: "/hackgtx-3.png",
      },
    ],
  },
  {
    title: "HackGT 9: Retro Reset",
    dates: "October 21 - 23, 2022",
    description:
      "HackGTs 9th annual collegiate hackathon! In 2022, over 1000 participants came together to embark on a 36-hour adventure to ‘Retro Reset’. With four unique tracks and close to $34,000 in prices, we hoped to spark our participants’ imagination and creativity as they experienced a virtul gaming arcade  ",
    devPostLink: "https://hackgt-9.devpost.com/",
    images: [
      {
        id: "9-1",
        alt: "HackGT group picture 1",
        path: "/hackgt9-1.png",
      },
      {
        id: "9-2",
        alt: "HackGT group picture 2",
        path: "/hackgt9-2.png",
      },
      {
        id: "9-3",
        alt: "girl playing arcade game",
        path: "/hackgt9-3.png",
      },
    ],
  },
  {
    title: "HackGT 8: Discover Your Craft",
    dates: "October 22 - 24, 2021",
    description:
      "HackGTs 8th annual installment of our flagship event! In 2021, 1500 participants joined together from across the globe to embark on a 36-hour adventure to ‘Discover Your Craft’. Our goal was to redefine what it means to have an incredible experience through both virtual and in-person workshops, mentors, and tech talks. We hoped to spark our participants’ creativity as they networked with other participants and hone their hacking skills.",
    devPostLink: "https://hackgt8.devpost.com/",
    images: [
      {
        id: "8-1",
        alt: "HackGT9 light decorations",
        path: "/hackgt8-1.png",
      },
      {
        id: "8-2",
        alt: "participants at workshop",
        path: "/hackgt8-2.png",
      },
      {
        id: "8-3",
        alt: "HackGT9 decorations",
        path: "/hackgt8-3.png",
      },
    ],
  },
  {
    title: "HackGT 7: Reimagine Reality",
    dates: "October 16 - 18, 2020",
    description:
      "HackGTs 7th annual, and first entirely virtual, installment of our marquee collegiate hackathon! In 2020, 2500 participants virtually came together to embark on a 36-hour adventure to ‘Reimagine Reality’. Our goal was to redefine what it means to have an incredible hacker experience through virtual workshops, mentors, and tech talks. We hoped to spark our participants’ imagination and creativity as they reimagined and created their own world! ",
    devPostLink: "https://hackgt2020.devpost.com/",
    images: [
      {
        id: "7-1",
        alt: "girl working on project at Horizons",
        path: "/hackgt7-1.png",
      },
      {
        id: "7-2",
        alt: "girl working on project at Horizons",
        path: "/hackgt7-2.png",
      },
      {
        id: "7-3",
        alt: "girl working on project at Horizons",
        path: "/hackgt7-3.png",
      },
    ],
  },
  {
    title: "HackGT 6: Into the Rabbit Hole",
    dates: "October 25 - 27, 2019",
    description:
      "HackGTs 6th annual installment of our marquee collegiate hackathon! In 2019, participants followed our mascot “Beardell” on a 36-hour adventure down the rabbit hole. As participants explored Wonderland they encountered magical workshops, created fantastical technology, and formed friendships to last a lifetime.",
    devPostLink: "https://hackgt2019.devpost.com/",
    images: [
      {
        id: "6-1",
        alt: "girl working on project at Horizons",
        path: "/hackgt6-1.png",
      },
      {
        id: "6-2",
        alt: "girl working on project at Horizons",
        path: "/hackgt6-2.png",
      },
      {
        id: "6-3",
        alt: "girl working on project at Horizons",
        path: "/hackgt6-3.png",
      },
    ],
  },
  {
    title: "HackGT 5: Dare to Venture",
    dates: "October 19 - 21, 2018",
    description:
      "HackGT’s 5th annual installment of our marquee 1000 person, 36-hour collegiate hackathon! In 2018, we helped participants reach New Heights, but this year we wanted to try something different. Specifically, Dare to Venture with our participants into the unknown. Inspired by the lush greenery of the Pacific Northwest, we organized a myriad of workshops, fireside chats, and mini-events in an effort to empower participants to learn something new and have fun in the process. ",
    devPostLink: "https://hackgt2018.devpost.com/",
    images: [
      {
        id: "5-1",
        alt: "girl working on project at Horizons",
        path: "/hackgt5-1.png",
      },
      {
        id: "5-2",
        alt: "girl working on project at Horizons",
        path: "/hackgt5-2.png",
      },
      {
        id: "5-3",
        alt: "girl working on project at Horizons",
        path: "/hackgt5-3.png",
      },
    ],
  },
  {
    title: "HackGT 4: New Horizons",
    dates: "October 13 - 15, 2017",
    description:
      "HackGT’s 4th annual signature 36-hour hackathon! In 2016, we received tons of great feedback about our event, and this year, we wanted to take it to New Heights. Motivated by the desire to better the experience of our participants and sponsors, we focused on cultivating a fun, resource enriched environment. From ceramics painting to AI workshops, this event spanned the gamut of an amazing hackathon experience. ",
    devPostLink: "https://hackgt2017.devpost.com/",
    images: [
      {
        id: "4-1",
        alt: "girl working on project at Horizons",
        path: "/hackgt4-1.png",
      },
      {
        id: "4-2",
        alt: "girl working on project at Horizons",
        path: "/hackgt4-2.png",
      },
      {
        id: "4-3",
        alt: "girl working on project at Horizons",
        path: "/hackgt4-3.png",
      },
    ],
  },
  {
    title: "HackGT 3: Flow",
    dates: "September 23 - 25, 2016",
    description:
      "HackGT’s third annual 36-hour hackathon! The underlying purpose of this event was to create an environment centered around healthy meals, self-care, and overall unblockage of ideas. Quite the contrary of normal hackathons! ",
    devPostLink: "https://hackgt2016.devpost.com/",
    images: [
      {
        id: "3-1",
        alt: "girl working on project at Horizons",
        path: "/hackgt3-1.png",
      },
      {
        id: "3-2",
        alt: "girl working on project at Horizons",
        path: "/hackgt3-2.png",
      },
      {
        id: "3-3",
        alt: "girl working on project at Horizons",
        path: "/hackgt3-3.png",
      },
    ],
  },
  {
    title: "HackGT 2",
    dates: "September 25 - 27, 2015",
    description:
      "HackGT’s second annual 36 hour hackathon! Focused on surpassing the edges of understanding and venturing into an abyss of uncertainty.",
    devPostLink: "https://fall2015.hack.gt/",
    images: [
      {
        id: "2-1",
        alt: "girl working on project at Horizons",
        path: "/hackgt2-1.png",
      },
      {
        id: "2-2",
        alt: "girl working on project at Horizons",
        path: "/hackgt2-2.png",
      },
      {
        id: "2-3",
        alt: "girl working on project at Horizons",
        path: "/hackgt2-3.png",
      },
    ],
  },
  {
    title: "HackGT 1",
    dates: "September 19 - 21, 2014",
    description:
      "HackGT’s first ever 36 hour hackathon! Founded on the motivation of making Georgia Tech students cool again, Pavleen and Shehmeer set out with the ambition of bringing the first ever hackathon to Georgia Tech turf. Strapped with grit, hardwork, and sacrifice, the original HackGT team not only brought together the organizations first hackathon, but inadvertently birthed the culture of innovation that we see today.",
    devPostLink: "https://hackgt2014.devpost.com/",
    images: [
      {
        id: "1-1",
        alt: "girl working on project at Horizons",
        path: "/hackgt1-1.png",
      },
      {
        id: "1-2",
        alt: "girl working on project at Horizons",
        path: "/hackgt1-2.png",
      },
      {
        id: "1-3",
        alt: "girl working on project at Horizons",
        path: "/hackgt1-3.png",
      },
    ],
  },
];

function ImageContainer(props) {
  return (
    <div className={styles.imageContainer}>
      <img src={props.image.path} alt={props.image.alt} className={styles.image} />
    </div>
  );
}

function Event(event: Event) {
  const images = event.images.map((img) => <ImageContainer key={img.id} image={img} />);
  return (
    <>
      <div className={styles.event}>
        <Hex
          size={25}
          borderSize={"8"}
          borderColor={"var(--color-blue)"}
          color={"white"}
          x={"-26px"}
          y={"0px"}
        />
        <div className={styles.topContainer}>
          <div className={styles.eventDescription}>
            <Text as="h3">{event.title}</Text>
            <h4>{event.dates}</h4>
            <p>{event.description}</p>
          </div>
        </div>
        {images}
        <div className={styles.buttonContainer}>
          <a target="_blank" href={event.devPostLink}>
            <Button type={ButtonType.OUTLINED}>Devpost</Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default function Timeline(props: Props) {
  return (
    <div>
      <section id="styles.customMargin" className="splash">
        <h1>HackGT</h1>
        <p className="max-width-600">
          Hackathons provide the community with the opportunity to grow, create, and impact. At
          HackGT, HexLabs teams up with sponsors from our community to provide issues relevant to
          today’s world for our HackGT participants to solve, provide workshops to help students
          learn, and prizes for winners!
        </p>
        <div className="hex-container">
          <Hex size={300} rotation={45} image="/timeline-new.jpg" x="60%" y="9%" />
        </div>
      </section>

      <div className={styles.timelineStyle}>{events.map(Event)}</div>
    </div>
  );
}
