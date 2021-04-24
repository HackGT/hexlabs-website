import { GetServerSideProps } from "next";
import { Button, ButtonType } from "../components/button";
import Hex from "../components/hex";

interface Props {}

export default function About(props: Props) {
  return (
    <>
      <style jsx>{`
        .two-col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .left {
          grid-column: 1/2;
        }

        .right {
          grid-column: 2/3;
        }

        .extra-padding {
          padding: 160px 0px; 
        }
      `}</style>

      <section className="splash">
        <div className="">
          <h1>Meet the Team</h1>
          <p>
            Our Operations, Design, Technology, and Marketing Teams work hard
            throughout the year to put on hackathons and bring STEM
            opportunities to high school and college students.
          </p>
        </div>
        <div className="hex-container">
          {/* TODO insert hexes in here */}
        </div>
      </section>

      <section>
        <h2>What We Do</h2>
        <p>
          Through throwing large-scale collegiate hackathons of upwards of 1000
          people to small-scale hackathons and workshops, our organization aims
          to spread the spirit of application, innovation, and creativity in
          computer science education.
        </p>
        <p>
          By partnering with companies and organizations large and small, we are
          able to cultivate environments that bring value to the lives of the
          communities we serve all at no cost to the participants. The
          motivation behind throwing free events is to allow for any person of
          any background to have the capacity to take full advantage of a
          positive experience. Our organization strives to provide a
          resource-rich environment that ultimately ends up in allowing a
          participant to learn and apply new skills, connect with other
          like-minded innovate individuals, and bring any of their ideas to
          life.
        </p>
      </section>

      <section className="two-col extra-padding">
        <div className="left">
          <Hex
            x="20%" 
            y="50%"
            transform="translate(-50%, -50%)"
            size={350}
            rotation={45}
          />
        </div>
        <div className="right">
          <h3> Exec Team </h3>
          <p>
            The HexLabs Executive Board guides the vision of HexLabs. From
            orchestrating the team’s actions to ensuring the organization
            exceeds its standards, this board helps ensure that HexLabs strives
            to be an organization that has a positive and lasting impact on the
            communities we serve.
          </p>
          <Hex
            x="80%"
            y="-70%"
            color="transparent"
            borderSize={4}
            borderColor="red"
            size={175}
            rotation={45}
          />
        </div>
      </section>

      <section className="two-col extra-padding">
        <div className="left">
          <h3>Design Team</h3>
          <p>
            The Design Team is the pioneer for eye-catching and compelling
            marketing for the organization. Through effective branding, unique
            event theming, and user friendly interfaces, HexLabs is able to
            offer exclusive and meaningful experiences that enrich the
            community.
          </p>
        </div>
        <div className="right">
          <Hex
            x="50%" 
            y="50%"
            transform="translate(-20%, -50%)"
            size={300}
            rotation={90}
          />
        </div>
      </section>

      <section className="two-col extra-padding">
        <div className="left"></div>
        <div className="right">
          <h3>Marketing Team</h3>
          <p>
            The Marketing Team is the voice of HexLabs. This team handles all
            forms of communication between the world and the organization
            through brand management, social media engagement, and partner
            outreach.
          </p>
        </div>
      </section>

      <section className="two-col extra-padding">
        <div className="left">
          <h3>Technology Team</h3>
          <p>
            The Technology Team develops the technology that allows HexLabs’
            events to run smoothly. From streamlining event check-in to
            automating the team’s deployment workflow, the technology team
            implements solutions to the logistical and technical problems we
            face when organizing events in an effort to improve our attendees’
            overall event experience.
          </p>
        </div>
        <div className="right"></div>
      </section>

      <section className="two-col extra-padding">
        <div className="left"></div>
        <div className="right">
          <h3>Operations Team</h3>
          <p>
            The Operations Team is the team responsible for the logistics of
            every initiative that HexLabs organizes. Including food, venue,
            transportation, and materials for each event, anything that is out
            of the scope of any of the other teams is covered by the Operations
            team. The goal of Operations is to make sure that the presence of
            each event is intact and that HexLabs’ events run smoothly.
          </p>
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
