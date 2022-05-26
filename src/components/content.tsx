import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import shortenUrl from "../api/url";
import Shorten from "./shorten";

function Content() {
  const [url, setUrl] = React.useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  const [isInvalid, setIsInvalid] = React.useState(false);
  const urlPatternValidation = () => {
    const regex = new RegExp("https?://.+");
    return regex.test(url);
  };
  const submitShortenUrl = async () => {
    setShortedUrl("");
    if (!urlPatternValidation()) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    setIsLoading(true);
    let shortedUrl = await shortenUrl(url);
    setIsLoading(false);
    setShortedUrl(shortedUrl);
  };
  const [shortedUrl, setShortedUrl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Container
      shadow="md"
      borderWidth="1px"
      centerContent
      borderRadius="10px"
      p="50px"
    >
      <FormControl isInvalid={isInvalid}>
        <FormLabel htmlFor="url" fontSize="4xl" fontFamily="asap">
          Enter the URL to be shorten
        </FormLabel>
        <Stack direction="row">
          <Input
            id="url"
            type="text"
            size="lg"
            placeholder="Enter the link here..."
            value={url}
            onChange={handleOnChange}
            isInvalid={isInvalid}
          />
          <Button
            colorScheme="blue"
            size="lg"
            onClick={async () => await submitShortenUrl()}
            isLoading={isLoading}
            loadingText="Submitting"
          >
            Shorten
          </Button>
        </Stack>
        {isInvalid && (
          <FormErrorMessage>Please enter a valid URL</FormErrorMessage>
        )}
      </FormControl>
      {shortedUrl && <Shorten url={shortedUrl} />}
    </Container>
  );
}

export default Content;
