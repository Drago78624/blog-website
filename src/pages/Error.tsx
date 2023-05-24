import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center">
      <VStack>
        <Heading>404</Heading>
        <Text>Page not found</Text>
        <Button as={Link} to="/" colorScheme="green">Back to Home</Button>
      </VStack>
    </Flex>
  );
};

export default Error;
