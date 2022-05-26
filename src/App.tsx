import React from "react";
import { Center, Container, Stack } from "@chakra-ui/react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <Container h="100vh" maxW="container.lg">
      <Center h="80vh">
        <Stack spacing="80px">
          <Header />
          <Content />
        </Stack>
      </Center>
      <Center>
        <Footer />
      </Center>
    </Container>
  );
}

export default App;
