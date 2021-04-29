import { GetServerSideProps } from "next";
import HCard from "../components/horizontalCard";

interface Props {}

export default function GetInvolved(props: Props) {
  return (
    <>
      <section className="splash">
        <h1>How to Get Involved</h1>
        <p>
          We want you to be a part of our community bla bla Join us ! We read
          all feedback carefully, and want to help you etc! Use the form below
          to send us your comments or report any problems you experienced
          finding information on our website. We read all feedback carefully,
          and want to.
        </p>
        <div className="hex-container">{/* TODO insert hexes */}</div>
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
            popularity, but it is still shrouded in mystery. Hexlabs has decided
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
          Sponsoring Sponsors are incredibly important to the events that we
          throw. We invite you to connect with students and broaden their vision
          on how they can shape both their future and the world. As a sponsor,
          you would receive access to the diverse and driven network of students
          that HexLabs brings together every year. You can showcase your
          products and technologies for participants to use, as well as your
          company’s culture and impact on the field. You may also have the
          chance to aid students in navigating the industry as well as by
          providing valuable insight into establishing careers.
        </p>
        <p>
          If you are interested in sponsoring, please reach out to hello@hack.gt
          or fill out the form on the Contact Us page.
        </p>
      </section>
      <section>
        <h2>Volunteering/Mentors</h2>
        <p>
          Our events could not run without the help of our mentors and student
          volunteers! Get involved with HexLabs by applying to be a mentor at
          any of our events, signing up to be a volunteer at our events, or
          both! If you’re interested in this opportunity, check out our event
          pages
        </p>
      </section>
      <section>
        <h2>Join our Team</h2>
        <p>

          If you're a Georgia Tech student, you can apply to 
          join the HexLabs team! Get notified about applications
          by joining our mailing list <a href="https://hackgt.us9.list-manage.com/subscribe?u=34c4c58551eca5eacf86c9479&id=7ac5ebfb77">here</a>!
        </p>
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
