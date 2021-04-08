import { GetServerSideProps } from "next";
import { Button, ButtonType } from "../components/button";
import Hex from "../components/hex";

interface Props {}

export default function About(props: Props) {
  return (
    <>
      <section className="splash splash-main">
        <div
          style={{
            maxWidth: "600px",
          }}
        >
          <h1 style={{fontSize: "75px",}}>Meet the Team</h1>
          <p style={{fontSize: "25px"}}>HackGT is a 501(c)(3) nonprofit and student organization consisting of Georgia Tech undergraduate students focused on being the drivers of computer science outreach in the Georgia Tech, state, and national communities.</p>
          <Button type={ButtonType.SOLID}>Action Button</Button>
        </div>
        <div className="hex-container">
          <Hex
            x="55%"
            y="0%"
            size={450}
            image="./splash.png"
            rotation={25}
            imgOffsetX={-180}
            imgOffsetY={-320}
            imgWidth={150}
            imgHeight={150}
          />
        </div>
      </section>

      <section>
       <h2>What We Do</h2>
        <p>Through throwing large-scale collegiate hackathons of upwards of 1000 people to small-scale hackathons and workshops, our organization aims to spread the spirit of application, innovation, and creativity in computer science education.

By partnering with companies and organizations large and small, we are able to cultivate environments that bring value to the lives of the communities we serve all at no cost to the participants. The motivation behind throwing free events is to allow for any person of any background to have the capacity to take full advantage of a positive experience. Our organization strives to provide a resource-rich environment that ultimately ends up in allowing a participant to learn and apply new skills, connect with other like-minded innovate individuals, and bring any of their ideas to life.
        </p>

        <div className="hex-container">
          <Hex
            x="110%"
            y="88%"
            size={100}
            color="transparent"
            borderSize={4}
            borderColor="#33C2FF"
            rotation={45}
          />
        </div>
      </section>
      <section>
       <h2>Exec Team</h2>
          <Hex
            x="50%"
            y="20%"
            size={300}
            image="../public/exec.png"
            color="transparent"
            rotation={70}
          />
        <p>The HexLabs Executive Board guides the vision of HexLabs. From orchestrating the team’s actions to ensuring the organization exceeds its standards, this board helps ensure that HexLabs strives to be an organization that has a positive and lasting impact on the communities we serve.
        </p>
      </section>

      <section>
       <h2>Design Team</h2>
        <p>The Design Team is the pioneer for eye-catching and compelling marketing for the organization. Through effective branding, unique event theming, and user friendly interfaces, HexLabs is able to offer exclusive and meaningful experiences that enrich the community. 
        </p>

        <div className="hex-container">
          <Hex
            x="21%"
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
       <h2>Marketing Team</h2>
        <p>The Marketing Team is the voice of HexLabs. This team handles all forms of communication between the world and the organization through brand management, social media engagement, and partner outreach.
        </p>

        <div className="hex-container">
          <Hex
            x="21%"
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
       <h2>Technology Team</h2>
        <p>The Technology Team develops the technology that allows HexLabs’ events to run smoothly. From streamlining event check-in to automating the team’s deployment workflow, the technology team implements solutions to the logistical and technical problems we face when organizing events in an effort to improve our attendees’ overall event experience.

        </p>

        <div className="hex-container">
          <Hex
            x="21%"
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
       <h2>Operations Team</h2>
        <p>The Operations Team is the team responsible for the logistics of every initiative that HexLabs organizes. Including food, venue, transportation, and materials for each event, anything that is out of the scope of any of the other teams is covered by the Operations team. The goal of Operations is to make sure that the presence of each event is intact and that HexLabs’ events run smoothly.


        </p>

        <div className="hex-container">
          <Hex
            x="21%"
            y="88%"
            size={100}
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
