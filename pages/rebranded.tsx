import Hex from "../components/hex";

interface Props {}

export default function Rebranded(props: Props) {
  return (
    <>
      <section className="splash">
        <h1>We're Rebranding</h1>
        <div className="max-width-600">
        <div className="sub-title">Getting ready for change</div>
        <p>
          Introducing HexLabs, the new parent organization of all your HackGT
          events. Under our new name, we will continue to cultivate innovative
          spaces for students to confidently discover, pursue, and create ideas
          together.
        </p>
        </div>
      </section>
      <section>
        <p>
          Thank you so much for being a part of the HackGT community and for
          your continued support and interest over the years. We’re rebranding,
          and this means that a name change.
        </p>
        <p>
          Our new name is HexLabs but we’re still the same organization that you
          know and love. We still host creative and engaging initiatives for you
          to get involved with such as our flagship HackGT hackathon, but now
          all events are connected together under an umbrella organization
          giving us room to grow in the future, while still being cohesive.
        </p>
        <p>
          If you want to learn more about the reasoning behind the decision to
          rebrand as well as any other details about our organization, visit our
          org site.
        </p>
        <p>
          Follow us on social media @thehexlabs and check out our new podcast
          and discord channel so you can stay connected with the HexLabs
          community!
        </p>
        <p>With love,<br/>
        HexLabs</p>
      </section>
      <section>
        <div className="sub-title">What is HexLabs?</div>
        <p>
        HexLabs is a new parent organization overseeing familiar events such as HackGT, Catalyst, and HealthTech. We are creating a consistent brand encompassing everything we do as an organization.
        </p>
        <div className="sub-title">Why are we rebranding to HexLabs?</div>
        <p>
        Instead of being defined by one event, we will be known as an organization that hosts a multitude of events, in addition to our annual hacakthon, HackGT. We’ll have more flexibility to expand and improve our events, start new initiatives, tackle challenges, and maybe even explore moving past hackathons.
        </p>
        <div className="sub-title">What is changing?</div>
        <p>
        Each event and intiiative will develop its own brand and identity and have the opportunity to grow. All of our events will be associated with HexLabs, however the name of our flagship hackathon, hackGT, will not be changing.
        </p>
      </section>
    </>
  );
}
