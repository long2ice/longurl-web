import { Container, Link, HStack, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Footer() {
  return (
    <Container centerContent pos="absolute" bottom="40px">
      <HStack spacing="25px">
        <Link href="https://github.com/long2ice/longurl-web" target="_blank">
          <FaGithub size="2em" />
        </Link>
        <Text>
          Made with ❤️ by{" "}
          <Link href="https://github.com/long2ice" isExternal>
            long2ice <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </HStack>
    </Container>
  );
}

export default Footer;
