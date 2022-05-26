import { Container, Heading } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Container centerContent>
      <Heading size="4xl" color="mediumslateblue">
        Long URL
      </Heading>
    </Container>
  );
}

export default Header;
