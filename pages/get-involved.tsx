import HCard from "../components/horizontalCard";
import { useMediaQuery } from "react-responsive";
import Hex from "../components/hex";

interface Props {}

export default function GetInvolved(props: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <>
      <style jsx>{`
        @media (max-width: 1200px) {
          #splash-hex {
            display: none;
          }
        }
      `}</style>
      <section className="splash">
        <div className="max-width-600">
          <h1>How to Get Involved</h1>
          <p>
            Get involved in an organization that takes pride in creating
            opportunities for students to innovate together, and encourages
            students to pursue their wildest ideas. Whether you are a student or
            an industry professional, there are many ways to get involved with
            HexLabs and the events that we throw.
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
                image="./get-involved.jpg"
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
                image="./get-involved.jpg"
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
        <h2>Participant</h2>
        <p>
          Get involved with HexLabs! You can stay involved with our organization
          throughout the year by attending events, joining our open Discord,
          listening to or being featured on our podcast, and following our
          social media pages. Learn more below!
        </p>
        <div>
          <HCard header="Attend Events" coverImage="involved-events.png">
            HexLabs hosts multiple events throughout the year for college and
            high school students. We hold our flagship hackathathon, HackGT,
            annually and we also host events such as Healthtech, Catalyst,
            Horizons, BuildGT and more! Visit our Events page to find out more
            information!
          </HCard>
          <HCard header="Get on our Podcast" coverImage="involved-podcast.jpg">
            Over the past 10 years, the hacker movement has exploded in
            popularity, but it is still shrouded in mystery. HexLabs has decided
            to explore this phenomenon and demystify what exactly is so
            compelling about it. Join us in conversations with students,
            hackers, and makers challenging their creativity. Follow the
            journeys of different individuals as they create and see how you can
            join the movement to create for the sake of creating.{" "}
          </HCard>
          <HCard header="Discord" coverImage="involved-discord.png">
            Hackathons are undoubtedly incredible sources of creativity and
            inspiration. We want to capture that innovation and sustain it
            throughout the year by creating a supportive community of like
            minded individuals all passionate about creating for the sake of
            creating. This is a great way to keep the momentum going between our
            various events by discussing projects, sharing ideas, and
            participating in smaller scale community events. Hacking never has
            to end and together we can continue to build.{" "}
          </HCard>
        </div>
      </section>

      <section>
        <h2>Sponsoring</h2>
        <p>
          Sponsors are incredibly important to the events that we throw. We
          invite you to connect with students and broaden their vision on how
          they can shape both their future and the world. As a sponsor, you
          would receive access to the diverse and driven network of students
          that HexLabs brings together every year. You can showcase your
          products and technologies for participants to use, as well as your
          company???s culture and impact on the field. You may also have the
          chance to aid students in navigating the industry as well as by
          providing valuable insight into establishing careers.
        </p>
        <p>
          If you are interested in sponsoring, please reach out to
          hello@hexlabs.org!
        </p>
      </section>
      <section>
        <h2>Volunteering/Mentors</h2>
        <p>
          Our events could not run without the help of our mentors and student
          volunteers! Get involved with HexLabs by applying to be a mentor at
          any of our events, signing up to be a volunteer at our events, or
          both! If you???re interested in this opportunity, check out our event
          pages
        </p>
      </section>
      <section>
        <h2>Join our Team</h2>
        <p>
          If you're a Georgia Tech student, you can apply to join the HexLabs
          team! Get notified about applications by joining our mailing list{" "}
          <a href="http://eepurl.com/hrkumn">here</a>!
        </p>
      </section>
    </>
  );
}
