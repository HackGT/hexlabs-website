import Hex from "../components/hex";
import { Box, Flex, Text } from '@chakra-ui/react';

interface Props {}

export default function Rebranded(props: Props) {
  return (
    <>
      <Box className="splash" justifyContent="center" margin = "0px" w="100vw" background="var(--color-purple-blue)"
      color="var(--color-white)" padding="0px 15%" minHeight="500px" overflow="hidden" >
        <Text as = "h1">We're Rebranding</Text>
        <Flex>
        <Box maxW = "600px">
          <Box m = "0px" fontSize ="2.5rem">Getting ready for change</Box>
          <Text>
            Introducing HexLabs, the new parent organization of all your HackGT
            events. Under our new name, we will continue to cultivate innovative
            spaces for students to confidently discover, pursue, and create
            ideas together.
          </Text>
        </Box>
        </Flex>
      </Box>
      <Box justifyContent="center" w = "100vw" padding="100px 15%" minHeight="500px">
        <Flex flexDirection="column">
        <Text>
          Thank you so much for being a part of the HackGT community and for
          your continued support and interest over the years. We’re rebranding,
          and this means that a name change.
        </Text>
        <Text>
          Our new name is HexLabs but we’re still the same organization that you
          know and love. We still host creative and engaging initiatives for you
          to get involved with such as our flagship HackGT hackathon, but now
          all events are connected together under an umbrella organization
          giving us room to grow in the future, while still being cohesive.
        </Text>
        <Text>
          If you want to learn more about the reasoning behind the decision to
          rebrand as well as any other details about our organization, visit our
          org site.
        </Text>
        <Text>
          Follow us on social media @thehexlabs and check out our new podcast
          and Discord channel so you can stay connected with the HexLabs
          community!
        </Text>
        <Text>
          With love,
          </Text>
        <Text>
          HexLabs
        </Text>
        </Flex>
      </Box>
      <Box padding = "0px 15%" paddingBottom="100px" minHeight="500px">
        <Box margin = "0px" fontSize = "2.5rem">What is HexLabs?</Box>
        <Text>
          HexLabs is a new parent organization overseeing familiar events such
          as HackGT, Catalyst, and HealthTech. We are creating a consistent
          brand encompassing everything we do as an organization.
        </Text>
        <Box margin = "0px" fontSize = "2.5rem">Why are we rebranding to HexLabs?</Box>
        <Text>
          Instead of being defined by one event, we will be known as an
          organization that hosts a multitude of events, in addition to our
          annual hackathon, HackGT. We’ll have more flexibility to expand and
          improve our events, start new initiatives, tackle challenges, and
          maybe even explore moving past hackathons.
        </Text>
        <Box margin = "0px" fontSize = "2.5rem">What is changing?</Box>
        <Text>
          Each event and initiative will develop its own brand and identity and
          have the opportunity to grow. All of our events will be associated
          with HexLabs; however, the name of our flagship hackathon, HackGT,
          will not be changing.
        </Text>
      </Box>
    </>
  );
}
