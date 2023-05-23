import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

const Login = () => {
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
          Login
        </Heading>
        <form>
          <Stack spacing={4}>
            <InputGroup>
              <Input borderColor="gray.300" placeholder="Email address" variant="flushed" />
            </InputGroup>
            <InputGroup>
              <Input borderColor="gray.300" placeholder="Password" variant="flushed" />
            </InputGroup>
            <Stack>
                <Button width="full" colorScheme="green">Login</Button>
                <Button width="full" colorScheme="red">Login with Google</Button>
                <Text textAlign="center">Not have an account ? <Text color="green" as="span">Register</Text></Text>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
