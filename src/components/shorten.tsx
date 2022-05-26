import { Button, Container, HStack, Link } from "@chakra-ui/react";
import { useState } from "react";

interface ShortenProps {
  url: string;
}

function Shorten(props: ShortenProps) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.url).then((_) => {
      setCopied(true);
    });
  };
  return (
    <Container centerContent mt="20px">
      <HStack>
        <Link href={props.url} target="_blank">
          {props.url}
          <Link />
        </Link>
        <Button variant="outline" onClick={copyToClipboard}>
          {copied ? "Copied" : "Copy"}
        </Button>
      </HStack>
    </Container>
  );
}

export default Shorten;
