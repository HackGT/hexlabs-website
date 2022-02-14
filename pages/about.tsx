import { Text, useMediaQuery } from "@chakra-ui/react";

import Hex from "../components/hex";

interface Props {}

export default function About(props: Props) {
  const [isMobile] = useMediaQuery("(max-width: 1200px)");

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

        @media (max-width: 1200px) {
          .two-col {
            display: flexbox;
            flex-wrap: wrap;
            position: relative;
          }

          .left {
            width: 100%;
          }

          .right {
            width: 100%;
          }
        }
      `}</style>

      <section className="splash">
        <div className="max-width-600">
          <Text as="h1">Meet the Team</Text>
          <Text>
            Our Operations, Design, Technology, and Marketing Teams work hard
            throughout the year to put on hackathons and bring STEM
            opportunities to high school and college students.
          </Text>
        </div>
        <div className="splash-hex hex-container">
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
            image="./about.jpg"
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
        <div className="hex-container">
          {isMobile ? (
            <>
              <Hex
                x="50%"
                y="-15%"
                transform="translate(-50%, 0px)"
                size={150}
                color="transparent"
                borderSize={2}
                borderColor="rgba(51, 194, 255, 0.6)"
                rotation={45}
              />
            </>
          ) : (
            <Hex
              x="140%"
              y="88%"
              size={100}
              color="transparent"
              borderSize={4}
              borderColor="#33C2FF"
              rotation={45}
            />
          )}
        </div>
        <Text as="h2" textAlign={isMobile ? "center" : "left"}>
          What We Do
        </Text>
        <Text mb="5">
          Through throwing large-scale collegiate hackathons of upwards of 1000
          people to small-scale hackathons and workshops, our organization aims
          to spread the spirit of application, innovation, and creativity in
          computer science education.
        </Text>
        <Text>
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
        </Text>
      </section>

      <section className="two-col extra-padding">
        <div className="hex-container">
          {isMobile ? (
            <>
              <Hex
                x="-30%"
                y="-40%"
                size={80}
                color="transparent"
                borderSize={2}
                borderColor="rgba(123, 105, 236, 1)"
                rotation={45}
              />
              <Hex
                x="50%"
                y="-15%"
                transform="translate(-50%, 0px)"
                size={120}
                image="./about-exec.jpg"
                color="transparent"
                rotation={40}
                imgOffsetX={0}
                imgOffsetY={0}
              />
              <Hex x="-70%" y="37%" size={180} color="#E3DFFE" rotation={-45} />
            </>
          ) : (
            <Hex
              x="-50%"
              y="-50%"
              transform="translate(50%, 50%)"
              size={300}
              image="./about-exec.jpg"
              color="transparent"
              borderSize={5}
              borderColor="rgba(51,194,255,0.3)"
              rotation={40}
              imgOffsetX={0}
              imgOffsetY={0}
            />
          )}
        </div>
        <div className="left"></div>
        <div className="right">
          <Text as="h3" textAlign={isMobile ? "center" : "left"} mb="5">
            Exec Team
          </Text>
          <Text>
            The HexLabs Executive Board guides the vision of HexLabs. From
            orchestrating the team’s actions to ensuring the organization
            exceeds its standards, this board helps ensure that HexLabs strives
            to be an organization that has a positive and lasting impact on the
            communities we serve.
          </Text>
        </div>
      </section>

      <section className="two-col extra-padding">
        <div className="hex-container">
          {isMobile ? (
            <>
              <Hex
                x="50%"
                y="-15%"
                transform="translate(-50%, 0px)"
                size={120}
                image="./about-design.jpg"
                color="transparent"
                rotation={35}
                imgOffsetX={0}
                imgOffsetY={0}
              />
            </>
          ) : (
            <>
              <Hex
                x="65%"
                y="-0%"
                size={300}
                image="./about-design.jpg"
                color="transparent"
                borderSize={5}
                borderColor="rgba(51,194,255,0.3)"
                rotation={32}
                imgOffsetX={0}
                imgOffsetY={0}
              />
              <Hex x="-50%" y="20%" size={300} color="#E3DFFE" rotation={-45} />
            </>
          )}
        </div>
        <div className="left">
          <Text as="h3" textAlign={isMobile ? "center" : "left"} mb="5">
            Design Team
          </Text>
          <Text>
            The Design Team is the pioneer for eye-catching and compelling
            marketing for the organization. Through effective branding, unique
            event theming, and user friendly interfaces, HexLabs is able to
            offer exclusive and meaningful experiences that enrich the
            community.
          </Text>
        </div>
        <div className="right"></div>
      </section>

      <section className="two-col extra-padding">
        <div className="hex-container">
          {isMobile ? (
            <>
              <Hex
                x="10%"
                y="-40%"
                size={150}
                color="transparent"
                borderSize={2}
                borderColor="#8a2be2"
                rotation={45}
              />
              <Hex
                x="50%"
                y="-15%"
                transform="translate(-50%, 0px)"
                size={120}
                image="./about-marketing.png"
                color="transparent"
                borderSize={5}
                borderColor="rgba(51,194,255,0.3)"
                rotation={23}
                imgOffsetX={0}
                imgOffsetY={0}
              />
              <Hex
                x="0%"
                y="60%"
                size={150}
                color="transparent"
                borderSize={2}
                borderColor="rgba(51, 194, 255, 1)"
                rotation={45}
              />
              <Hex x="65%" y="56%" size={120} color="#E3DFFE" rotation={20} />
            </>
          ) : (
            <>
              <Hex
                x="-18%"
                y="-20%"
                size={250}
                color="transparent"
                borderSize={4}
                borderColor="#7b69ec"
                rotation={45}
              />
              <Hex
                x="-25%"
                y="-0%"
                size={300}
                image="./about-marketing.png"
                color="transparent"
                borderSize={5}
                borderColor="rgba(51,194,255,0.3)"
                rotation={20}
                imgOffsetX={0}
                imgOffsetY={0}
              />
            </>
          )}
        </div>
        <div className="left"></div>
        <div className="right">
          <Text as="h3" textAlign={isMobile ? "center" : "left"} mb="5">
            Marketing Team
          </Text>
          <Text>
            The Marketing Team is the voice of HexLabs. This team handles all
            forms of communication between the world and the organization
            through brand management, social media engagement, and partner
            outreach.
          </Text>
        </div>
      </section>

      <section className="two-col extra-padding">
        <div className="hex-container">
          {isMobile ? (
            <>
              <Hex x="-70%" y="0%" size={180} color="#E3DFFE" rotation={15} />
              <Hex
                x="50%"
                y="-15%"
                transform="translate(-50%, 0px)"
                size={120}
                image="./about-tech.png"
                color="transparent"
                rotation={35}
                imgOffsetX={0}
                imgOffsetY={0}
              />
            </>
          ) : (
            <>
              <Hex x="-70%" y="-10%" size={300} color="#E3DFFE" rotation={15} />
              <Hex
                x="60%"
                y="20%"
                size={300}
                image="./about-tech.png"
                color="transparent"
                borderSize={5}
                borderColor="rgba(51,194,255,0.3)"
                rotation={35}
                imgOffsetX={0}
                imgOffsetY={0}
              />
            </>
          )}
        </div>
        <div className="left">
          <Text as="h3" textAlign={isMobile ? "center" : "left"} mb="5">
            Technology Team
          </Text>
          <Text>
            The Technology Team develops the technology that allows HexLabs’
            events to run smoothly. From streamlining event check-in to
            automating the team’s deployment workflow, the technology team
            implements solutions to the logistical and technical problems we
            face when organizing events in an effort to improve our attendees’
            overall event experience.
          </Text>
        </div>
        <div className="right"></div>
      </section>

      <section className="two-col extra-padding">
        <div className="hex-container">
          {isMobile ? (
            <>
              <Hex
                x="50%"
                y="-15%"
                transform="translate(-50%, 0px)"
                size={120}
                image="./about-ops.png"
                color="transparent"
                rotation={35}
                imgOffsetX={0}
                imgOffsetY={0}
              />
              <Hex
                x="-20%"
                y="45%"
                size={120}
                color="transparent"
                borderSize={2}
                borderColor="rgba(123, 105, 236, 1)"
                rotation={45}
              />
              <Hex x="30%" y="25%" size={200} color="#E3DFFE" rotation={50} />
            </>
          ) : (
            <>
              <Hex
                x="-10%"
                y="40%"
                size={350}
                color="transparent"
                borderSize={5}
                borderColor="rgba(51,194,255,0.3)"
                rotation={45}
              />
              <Hex x="60%" y="0%" size={350} color="#E3DFFE" rotation={50} />
              <Hex
                x="-15%"
                y="-0%"
                size={300}
                image="./about-ops.png"
                color="transparent"
                borderSize={5}
                borderColor="rgba(51,194,255,0.3)"
                rotation={35}
                imgOffsetX={0}
                imgOffsetY={0}
              />
            </>
          )}
        </div>
        <div className="left"></div>
        <div className="right">
          <Text as="h3" textAlign={isMobile ? "center" : "left"} mb="5">
            Operations Team
          </Text>
          <Text>
            The Operations Team is the team responsible for the logistics of
            every initiative that HexLabs organizes. Including food, venue,
            transportation, and materials for each event, anything that is out
            of the scope of any of the other teams is covered by the Operations
            team. The goal of Operations is to make sure that the presence of
            each event is intact and that HexLabs’ events run smoothly.
          </Text>
        </div>
      </section>
    </>
  );
}
