import Hex from "../components/hex";

import { Text } from "@chakra-ui/react";

interface Props {}

export default function Contact(props: Props) {
  return (
    <>
      <section className="splash">
        <div className="max-width-500">
          <Text as="h1">Contact Us</Text>
          <Text>
            We want you to let us know what is going on. How do you feel about
            our events? Please contact us using the information below to send us
            your comments or concerns. We read all feedback carefully, and want
            to hear your thoughts!
          </Text>
        </div>
        <div className="splash-hex hex-container">
          <Hex
            size={300}
            rotation={45}
            image="/contact-us.png"
            x="60%"
            y="9%"
          />
        </div>
      </section>
      <section>
        <Text as="h3" mb="5">
          Contact Email
        </Text>
        <a href="mailto:hello@hexlabs.org">hello@hexlabs.org</a>
      </section>
    </>
  );
}
