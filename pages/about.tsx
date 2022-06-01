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
            Our Operations, Design, Technology, and Marketing Teams work hard throughout the year to
            put on hackathons and bring STEM opportunities to high school and college students.
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
          Through throwing large-scale collegiate hackathons of upwards of 1000 people to
          small-scale hackathons and workshops, our organization aims to spread the spirit of
          application, innovation, and creativity in computer science education.
        </Text>
        <Text>
          By partnering with companies and organizations large and small, we are able to cultivate
          environments that bring value to the lives of the communities we serve all at no cost to
          the participants. The motivation behind throwing free events is to allow for any person of
          any background to have the capacity to take full advantage of a positive experience. Our
          organization strives to provide a resource-rich environment that ultimately ends up in
          allowing a participant to learn and apply new skills, connect with other like-minded
          innovate individuals, and bring any of their ideas to life.
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
            The HexLabs Executive Board guides the vision of HexLabs. From orchestrating the team’s
            actions to ensuring the organization exceeds its standards, this board helps ensure that
            HexLabs strives to be an organization that has a positive and lasting impact on the
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
            The Design Team ideates and designs all of HexLabs’s visual and product experiences. We
            are a multidisciplinary team made of one-of-kind designers with passions for graphic
            design, product design, motion design, UX research, and more! Together, we are
            responsible for theming the event, curating swag like stickers and t-shirts, designing
            graphics for marketing posts, and wireframing/prototyping all HexLabs tech products and
            websites. We look for outside-of-the-box thinkers who are passionate about their craft,
            eager to collaborate, and ready to design the never-before-seen.
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
            On the Marketing Team, we value engaging and interacting with various communities in
            relation to our organization. From event partners to volunteers to alumni to
            participants, we are tasked with general organizational communication and event
            recruiting. Our mission is to build and cultivate the HexLabs brand and spread the word
            about our organization’s initiatives and accomplishments. Oftentimes, you’ll be thinking
            about social media campaigns, and how to keep students in touch with us on our platforms
            through raffles and promotional videos. We strive to stay connected with the community
            and other organizations on campus. On this team, we value creativity, ambition, writing
            skills and communication, and collaboration skills!
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
            Finance Team
          </Text>
          <Text>
            The Finance Team has two major responsibilities: acquiring <b>sponsorship</b> and{" "}
            <b>budget management</b>. We are in charge of maintaining external relations with
            sponsors and allowing the teams to function to the best of their ability with proper
            financial judgment by maintaining the flow of resources in and out of the organization.
            This can include work involving budgeting, taxes, cold outreach via email/LinkedIn, etc.
            to fund and support HexLab's various initiatives. We are an ambitious and hardworking
            team that values communication, organization, flexibility, calmness, and collaboration
            skills!
          </Text>
        </div>
        <div className="right"></div>
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
            The Tech Team creates all the tech that powers our events. We build all our tools
            in-house that keep our events running smoothly, keep participants engaged, and make
            people rethink what the hackathon experience is like. We work on a variety of projects
            from our proprietary judging platform, check-in/registration, a web app for virtual team
            formation, and so much more. We’ve also created fun hardware for our in-person events
            like a style-transfer photo booth and a vintage arcade game. We look for people who are
            creative, work hard, and take initiative to make our biggest ideas a reality.
            <br />
            GitHub: <a href="https://www.github.com/HackGT">https://www.github.com/HackGT</a>
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
            On the Operations Team, we do all of the little things needed to bring the event
            together—and believe us, there are a LOT of little things. From ordering food and swag
            to coordinating parking and transportation, to organizing the layout of our events, to
            recruiting judges and mentors, to creating a curriculum—we do it all! There's a huge
            variety of different tasks that we handle, so there's never a boring day for us. We also
            work with other subteams to bring everything together into one awesome event, so there's
            lots of collaboration too! We are the catch-all team, ready to tackle whatever is thrown
            at us.
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
            Catalyst
          </Text>
          <Text>
            HexLabs’ Catalyst initiative has recently transformed into a structured subteam focused
            on giving more to the high school community! Our foundational goal for the Catalyst
            initiative is to present opportunities for underserved high school students in technical
            exploration and learning. These opportunities include workshops, career panels, and
            mentorship. Over the past five years, we have pursued this goal through our annual
            learn-a-thon for schools in the metro ATL. We have revamped to reach more students and
            have started a cohort program that extends the vision of our one-day learn-a-thon event
            with activities like field trips, panels, and mentoring to provide more insight into
            professional and academic trajectories. Our subteam splits the different
            responsibilities of each team mentioned above but on a smaller scale, and we are curious
            about researching and developing creative ideas and implementing the vision to improve
            accessibility to STEM and Computer Science!
          </Text>
        </div>
        <div className="right"></div>
      </section>
    </>
  );
}
