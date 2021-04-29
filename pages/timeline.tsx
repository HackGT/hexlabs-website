import Hex from "../components/hex";

interface Props {}

export default function Timeline(props: Props) {
  return (
    <section className="splash">
      <h1>HackGT</h1>
      <p className="max-width-600">
        A hackathon is an event where programmers collaborate to form creative
        and innovative solution to posed problems. Teams of students spend a
        weekend utilizing resources and support that we provide to bring their
        ideas to life. Hackathons provide the community with the opportunity to
        grow, create, and impact. At HackGT, HexLabs teams up with sponsors from
        our community to provide issues relevant to today’s world for our HackGT
        participants to solve, provide workshops to help students learn, and
        prizes for winners!
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
  );
}
