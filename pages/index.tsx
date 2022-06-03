import Hex from "../components/hex";
import Link from "next/link";
import { Box, Button, Text, Image, SimpleGrid, Flex } from "@chakra-ui/react";

interface Props {}

interface InitiativeCardProps {
  coverImage: string;
  coverImageAlt: string;
  heading: string;
  body: string;
  button: React.ReactNode;
}

const InitiativeCard: React.FC<InitiativeCardProps> = (props: InitiativeCardProps) => {
  return (
    <Box layerStyle="card">
      <Image src={props.coverImage} alt={props.coverImageAlt} layerStyle="card-image" />
      <Flex p="8" flexDirection="column" justifyContent="space-between" gap="5" flexGrow="1">
        <Box>
          <Text as="h4">{props.heading}</Text>
          <Text color="gray" mt="2">
            {props.body}
          </Text>
        </Box>

        {props.button}
      </Flex>
    </Box>
  );
};

export default function Home(props: Props) {
  return (
    <>
      <section className="splash splash-main">
        <div className="max-width-400">
          <Text as="h2" fontWeight="700" mb="5">
            HexLabs
          </Text>
          <Link href="/about">
            <Button colorScheme="purple">Learn More</Button>
          </Link>
        </div>
        <div className="hex-container">
          {/* middle */}
          <Hex x="4%" y="9%" size={275} color="rgba(255,255,255,0.2)" rotation={-45} />

          {/* top right */}
          <Hex
            x="33%"
            y="-23%"
            size={350}
            color="transparent"
            borderSize={4}
            borderColor="rgba(255, 255, 255, 0.2)"
            rotation={45}
          />

          <Hex x="40%" y="-50%" size={475} image="/splash.png" imageDy={300} rotation={45} />

          {/* bottom left */}
          <Hex x="-1%" y="58%" size={150} color="rgba(255,255,255,0.5)" rotation={45} />
          <Hex
            x="-3%"
            y="81%"
            size={100}
            color="transparent"
            borderSize={5}
            borderColor="white"
            rotation={-45}
          />
        </div>
      </section>

      <section>
        <Text as="h3" mb="5">
          About Us
        </Text>
        <Text>
          HexLabs is a student-led, nonprofit organization that throws large-scale hackathons to
          spread the opportunity for innovation to high school and college students. We partner with
          companies to cultivate an environment of enrichment and growth for our participants to be
          able to learn new skills and use them to bring new ideas to life.
        </Text>
        <div className="hex-container">
          <Hex
            x="-25%"
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
        <Text as="h3" mb="5">
          Say Hello to HexLabs
        </Text>
        <Text mb="5">
          We're HexLabs, the new parent organization overseeing familiar events like HackGT,
          HackGTeeny, Catalyst, BuildGT, HealthTech, and Horizons. Learn more about our new parent
          organizatinon which will be our driving force behind our mission to cultivate innovative
          spaces for students to work together.
        </Text>
        <Link href="/rebranded">
          <Button colorScheme="purple">Learn More</Button>
        </Link>
      </section>
      <section>
        <Text as="h3" mb="5">
          Community Initiatives
        </Text>
        <SimpleGrid columns={[1, 1, 2]} spacing="40px">
          <InitiativeCard
            coverImage="./horizons_painter.jpg"
            coverImageAlt="People smiling"
            heading="Getting Involved"
            body="Learn more about how you can get involved with HexLabs as an
                  organizer, participant, mentor, sponsor, and more!"
            button={
              <Link href="/get-involved">
                <Button colorScheme="purple">Learn More</Button>
              </Link>
            }
          />

          <InitiativeCard
            coverImage="./guys_looking_up.jpg"
            coverImageAlt="Guy looking in mirror"
            heading="Discord"
            body="Join the Hex Commons, a supportive community of like-minded
                  creators."
            button={
              <Link href="https://discord.hexlabs.org">
                <Button colorScheme="purple">Join Us</Button>
              </Link>
            }
          />
        </SimpleGrid>

        <div className="hex-container">
          <Hex x="-40%" y="72%" size={450} color="rgba(123,105,236,0.3)" rotation={-45} />
          <Hex
            x="21%"
            y="84%"
            size={250}
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
