import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container
      maxW={1400}
      minH="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box minW={300}>
        <Heading textAlign="center" mb={10} size="lg">
          Register
        </Heading>
        <form>
          <Stack spacing={4}>
            <HStack spacing={4}>
              <InputGroup>
                <Input
                  borderColor="gray.300"
                  placeholder="First name"
                  variant="flushed"
                />
              </InputGroup>
              <InputGroup>
                <Input
                  borderColor="gray.300"
                  placeholder="Last name"
                  variant="flushed"
                />
              </InputGroup>
            </HStack>
            <InputGroup>
              <Input
                borderColor="gray.300"
                placeholder="Email address"
                variant="flushed"
              />
            </InputGroup>
            <InputGroup>
              <Input
                borderColor="gray.300"
                placeholder="Password"
                variant="flushed"
              />
            </InputGroup>
            <InputGroup>
              <Input
                borderColor="gray.300"
                placeholder="Confirm Password"
                variant="flushed"
              />
            </InputGroup>
            <Stack>
              <Button width="full" colorScheme="green">
                Register
              </Button>
              <Button width="full" colorScheme="red">
                Login with Google
              </Button>
              <Text textAlign="center">
                Already have an account ?{" "}
                <Text color="green" as={Link} to="/login">
                  <Text as="span">Login</Text>
                </Text>
              </Text>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
