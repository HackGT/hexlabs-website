import { GetServerSideProps } from "next";
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
    </>
  );
}
