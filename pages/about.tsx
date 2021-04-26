import { GetServerSideProps } from "next";
import { useMediaQuery } from "react-responsive";

import { Button, ButtonType } from "../components/button";
import Hex from "../components/hex";

interface Props {}

export default function About(props: Props) {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return (
        <>
            <section className="splash splash-main">
                <div className="splash-main-text">
                    <h1 className="splash-heading">Meet the Team</h1>
                    <p className="splash-text">
                        HackGT is a 501(c)(3) nonprofit and student organization
                        consisting of Georgia Tech undergraduate students
                        focused on being the drivers of computer science
                        outreach in the Georgia Tech, state, and national
                        communities.
                    </p>
                </div>
                <div className="hex-container">
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
                                image="./splash.png"
                                rotation={15}
                                imgOffsetX={-180}
                                imgOffsetY={-80}
                                imgWidth={180}
                                imgHeight={180}
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
                                size={400}
                                image="./splash.png"
                                rotation={15}
                                imgOffsetX={-180}
                                imgOffsetY={-320}
                                imgWidth={150}
                                imgHeight={150}
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
                <section>
                    <h2 className="info-heading">What We Do</h2>
                    <p className="info-text info-text-what-we-do">
                        Through throwing large-scale collegiate hackathons of
                        upwards of 1000 people to small-scale hackathons and
                        workshops, our organization aims to spread the spirit of
                        application, innovation, and creativity in computer
                        science education. <br /> <br /> By partnering with
                        companies and organizations large and small, we are able
                        to cultivate environments that bring value to the lives
                        of the communities we serve all at no cost to the
                        participants. The motivation behind throwing free events
                        is to allow for any person of any background to have the
                        capacity to take full advantage of a positive
                        experience. Our organization strives to provide a
                        resource-rich environment that ultimately ends up in
                        allowing a participant to learn and apply new skills,
                        connect with other like-minded innovate individuals, and
                        bring any of their ideas to life.
                    </p>
                    <div className="hex-container">
                        {isMobile ? (
                            <>
                                <Hex
                                    x="35%"
                                    y="35%"
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
                </section>
                <section>
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
                                x="-10%"
                                y="-20%"
                                size={150}
                                image="./exec.png"
                                color="transparent"
                                rotation={40}
                                imgOffsetX={-10}
                                imgOffsetY={-100}
                                imgWidth={120}
                                imgHeight={150}
                            />
                            <Hex
                                x="-70%"
                                y="37%"
                                size={180}
                                color="#E3DFFE"
                                rotation={-45}
                            />
                        </>
                    ) : (
                        <Hex
                            x="-45%"
                            y="-0%"
                            size={400}
                            image="./exec.png"
                            color="transparent"
                            rotation={40}
                            imgOffsetX={50}
                            imgOffsetY={-230}
                            imgWidth={100}
                            imgHeight={120}
                        />
                    )}
                    <h3
                        style={{
                            position: "relative",
                            right: "10%",
                            left: "30%",
                            paddingTop: "200px",
                            marginLeft: "10%",
                            paddingBottom: "400px",
                        }}
                        className="info-heading"
                    >
                        Exec Team
                        <p
                            style={{
                                position: "absolute",
                                right: "20%",
                                lineHeight: "40px",
                            }}
                            className="info-text"
                        >
                            The HexLabs Executive Board guides the vision of
                            HexLabs. From orchestrating the team’s actions to
                            ensuring the organization exceeds its standards,
                            this board helps ensure that HexLabs strives to be
                            an organization that has a positive and lasting
                            impact on the communities we serve.
                        </p>
                    </h3>
                </section>
                <section>
                    {isMobile ? (
                        <>
                            <Hex
                                x="-10%"
                                y="-20%"
                                size={150}
                                image="./exec_2.png"
                                color="transparent"
                                rotation={35}
                                imgOffsetX={-10}
                                imgOffsetY={-100}
                                imgWidth={120}
                                imgHeight={150}
                            />
                        </>
                    ) : (
                        <>
                            <Hex
                                x="85%"
                                y="-0%"
                                size={400}
                                image="./exec_2.png"
                                color="transparent"
                                rotation={32}
                                imgOffsetX={-50}
                                imgOffsetY={-260}
                                imgWidth={110}
                                imgHeight={120}
                            />
                            <Hex
                                x="-70%"
                                y="20%"
                                size={300}
                                color="#E3DFFE"
                                rotation={-45}
                            />
                        </>
                    )}
                    <h3
                        style={{
                            position: "relative",
                            right: "30%",
                            left: "-30%",
                            paddingTop: "200px",
                            marginRight: "10%",
                            paddingBottom: "400px",
                        }}
                        className="info-heading"
                    >
                        Design Team
                        <p
                            style={{
                                position: "absolute",
                                right: "30%",
                                lineHeight: "40px",
                            }}
                            className="info-text"
                        >
                            The Design Team is the pioneer for eye-catching and
                            compelling marketing for the organization. Through
                            effective branding, unique event theming, and user
                            friendly interfaces, HexLabs is able to offer
                            exclusive and meaningful experiences that enrich the
                            community.
                        </p>
                    </h3>
                </section>

                <section>
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
                                x="-10%"
                                y="-20%"
                                size={150}
                                image="./exec.png"
                                color="transparent"
                                rotation={23}
                                imgOffsetX={-10}
                                imgOffsetY={-100}
                                imgWidth={120}
                                imgHeight={150}
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
                            <Hex
                                x="65%"
                                y="56%"
                                size={120}
                                color="#E3DFFE"
                                rotation={20}
                            />
                        </>
                    ) : (
                        <>
                            <Hex
                                x="-18%"
                                y="-20%"
                                size={250}
                                color="transparent"
                                borderSize={4}
                                borderColor="#8a2be2"
                                rotation={45}
                            />
                            <Hex
                                x="-55%"
                                y="-0%"
                                size={400}
                                image="./exec.png"
                                color="transparent"
                                rotation={20}
                                imgOffsetX={50}
                                imgOffsetY={-380}
                                imgWidth={120}
                                imgHeight={150}
                            />
                        </>
                    )}
                    <h3
                        style={{
                            position: "relative",
                            right: "10%",
                            left: "30%",
                            paddingTop: "200px",
                            marginLeft: "10%",
                            paddingBottom: "400px",
                        }}
                        className="info-heading"
                    >
                        Marketing Team
                        <p
                            style={{
                                position: "absolute",
                                right: "30%",
                                lineHeight: "40px",
                            }}
                            className="info-text"
                        >
                            The Marketing Team is the voice of HexLabs. This
                            team handles all forms of communication between the
                            world and the organization through brand management,
                            social media engagement, and partner outreach.
                        </p>
                    </h3>
                </section>

                <section>
                    {isMobile ? (
                        <></>
                    ) : (
                        <div
                            style={{
                                position: "relative",
                                right: "10%",
                                left: "30%",
                                paddingTop: "200px",
                                marginLeft: "10%",
                                paddingBottom: "250px",
                            }}
                        >
                            <Hex
                                x="40%"
                                y="-30%"
                                size={370}
                                color="transparent"
                                borderSize={4}
                                borderColor="#8a2be2"
                                rotation={45}
                            />
                            <Hex
                                x="65%"
                                y="-60%"
                                size={300}
                                color="#E3DFFE"
                                rotation={22}
                            />
                        </div>
                    )}
                </section>
                <section>
                    {isMobile ? (
                        <>
                            <Hex
                                x="-70%"
                                y="0%"
                                size={180}
                                color="#E3DFFE"
                                rotation={15}
                            />
                            <Hex
                                x="-10%"
                                y="-20%"
                                size={150}
                                image="./exec.png"
                                color="transparent"
                                rotation={35}
                                imgOffsetX={-10}
                                imgOffsetY={-100}
                                imgWidth={120}
                                imgHeight={150}
                            />
                        </>
                    ) : (
                        <>
                            <Hex
                                x="-70%"
                                y="-10%"
                                size={400}
                                color="#E3DFFE"
                                rotation={15}
                            />
                            <Hex
                                x="95%"
                                y="20%"
                                size={400}
                                image="./exec_2.png"
                                color="transparent"
                                borderSize={5}
                                borderColor="rgba(51,194,255,0.3)"
                                rotation={35}
                                imgOffsetX={50}
                                imgOffsetY={-380}
                                imgWidth={160}
                                imgHeight={150}
                            />
                        </>
                    )}
                    <h3
                        style={{
                            position: "relative",
                            right: "10%",
                            left: "-30%",
                            paddingTop: "200px",
                            marginLeft: "10%",
                            paddingBottom: "400px",
                        }}
                        className="info-heading"
                    >
                        Technology Team
                        <p
                            style={{
                                position: "absolute",
                                right: "30%",
                                lineHeight: "40px",
                            }}
                            className="info-text"
                        >
                            The Technology Team develops the technology that
                            allows HexLabs’ events to run smoothly. From
                            streamlining event check-in to automating the team’s
                            deployment workflow, the technology team implements
                            solutions to the logistical and technical problems
                            we face when organizing events in an effort to
                            improve our attendees’ overall event experience.
                        </p>
                    </h3>
                </section>

                <section>
                    {isMobile ? (
                        <>
                            <Hex
                                x="-10%"
                                y="-70%"
                                size={150}
                                image="./exec.png"
                                color="transparent"
                                rotation={35}
                                imgOffsetX={-10}
                                imgOffsetY={-100}
                                imgWidth={120}
                                imgHeight={150}
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
                            <Hex
                                x="30%"
                                y="25%"
                                size={200}
                                color="#E3DFFE"
                                rotation={50}
                            />
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
                            <Hex
                                x="60%"
                                y="0%"
                                size={600}
                                color="#E3DFFE"
                                rotation={50}
                            />
                            <Hex
                                x="-25%"
                                y="-0%"
                                size={400}
                                image="./exec.png"
                                color="transparent"
                                borderSize={5}
                                borderColor="rgba(51,194,255,0.3)"
                                rotation={35}
                                imgOffsetX={50}
                                imgOffsetY={-380}
                                imgWidth={160}
                                imgHeight={150}
                            />
                        </>
                    )}
                    <h3
                        style={{
                            position: "relative",
                            right: "0%",
                            left: "50%",
                            paddingTop: "300px",
                            marginLeft: "10%",
                            paddingBottom: "1000px",
                        }}
                        className="info-heading info-heading-operations"
                    >
                        Operations Team
                        <p
                            style={{
                                position: "absolute",
                                right: "30%",
                                lineHeight: "40px",
                            }}
                            className="info-text"
                        >
                            The Operations Team is the team responsible for the
                            logistics of every initiative that HexLabs
                            organizes. Including food, venue, transportation,
                            and materials for each event, anything that is out
                            of the scope of any of the other teams is covered by
                            the Operations team. The goal of Operations is to
                            make sure that the presence of each event is intact
                            and that HexLabs’ events run smoothly.
                        </p>
                    </h3>
                </section>
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
