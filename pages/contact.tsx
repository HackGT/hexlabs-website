import Hex from "../components/hex";

interface Props {}

export default function Contact(props: Props) {
  return (
    <>
      <section className="splash">
        <h1>Contact Us</h1>
        <p className="max-width-600">
          We want you to let us know what is going on, how you feel about these
          events xyz please contact us Use the form below to send us your
          comments or report any problems you experienced finding information on
          our website. We read all feedback carefully, and want to.
        </p>
        <div className="hex-container">
          <Hex
            size={300}
            rotation={45}
            image="/timeline-splash.png"
            x="60%"
            y="9%"
          />
        </div>
      </section>
      <section>
        <h3>Commonly Asked Questions</h3>
        <p>
          <strong>How do I sign up for a hackathon?&nbsp;</strong>
          Especially : a common garden vegetable (L. sativa) whose succulent
          leaves are used especially in salads. Especially : a common garden
          vegetable (L. sativa) whose succulent leaves are used especially in
          salads.
        </p>
        <p>
          <strong>What tracks are there?&nbsp;</strong>
          Especially : a common garden vegetable (L. sativa) whose succulent
          leaves are used especially in salads. Especially : a common garden
          vegetable (L. sativa) whose succulent leaves are used especially in
          salads.
        </p>
        <p>
          <strong>I am a beginner?&nbsp;</strong>You might enjoy things along
          the likes of:
          <ul>
            <li>“I’ve taken AP Computer Science ?”</li>
            <li>“I’ve taken a computer science class before ?”</li>
            <li>“I’ve taken AP Computer Science ?”</li>
            <li>“I’ve taken a computer science class before ?”</li>
          </ul>
        </p>
      </section>
      <section>
        <h3>Contact Us</h3>
        <a href="mailto:hello@hexlabs.org">
          <h4>hello@hack.gt</h4>
        </a>
      </section>
    </>
  );
}
