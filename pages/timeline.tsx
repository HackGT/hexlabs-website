import { GetServerSideProps } from "next";
import styles from "./timeline.module.css";
import Image from "next/image";
import Button, { ButtonType } from "../components/button";

interface Props {}

interface Image {
  alt: string;
  path: string;
}

interface Event {
  title: string;
  dates: string;
  description: string;
  images: Image[];
}

const events: Event[] = [
  {
    title: "HackGT 7: Reimagine Reality",
    dates: "October 16-18, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    images: [
      {
        alt: "girl working on project at Horizons",
        path: "/hackgt7-1.jpg"
      },
      {
        alt: "girl working on project at Horizons",
        path: "/hackgt7-1.jpg"
      },
      {
        alt: "girl working on project at Horizons",
        path: "/hackgt7-1.jpg"
      }
    ]
  },
  {
    title: "HackGT 7: Reimagine Reality",
    dates: "October 16-18, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    images: [
      {
        alt: "girl working on project at Horizons",
        path: "/hackgt7-1.jpg"
      }
    ]
  },
  {
    title: "HackGT 7: Reimagine Reality",
    dates: "October 16-18, 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    images: [
      {
        alt: "girl working on project at Horizons",
        path: "/hackgt7-1.jpg"
      }
    ]
  }
];

function ImageContainer(images: Image[]) {
  return (
    <div className={styles.imageContainer}>
      {images.map(image => {
        return (
          <div
            style={{
              height: "37rem",
              width: "100%",
              padding: "1rem"
            }}
          >
            <div
              style={{
                position: "relative",
                maxWidth: "100%",
                height: "100%",
                marginRight: "1rem"
              }}
            >
              <Image
                src={image.path}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Event(event: Event) {
  return (
    <div className={styles.event}>
      <h2>{event.title}</h2>
      <h3>{event.dates}</h3>
      <p>{event.description}</p>
      {ImageContainer(event.images)}
      <div className={styles.buttonContainer}>
        <Button text="Website" type={ButtonType.Solid} />
        <Button text="Photos" type={ButtonType.Solid} />
        <Button text="Devpost" type={ButtonType.Solid} />
      </div>
    </div>
  );
}

export default function Timeline(props: Props) {
  return <div>{events.map(Event)}</div>;
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  // Make request here for data
  return {
    props: {} // will be passed to the page component as props
  };
};
