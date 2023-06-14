import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userLogin, userLoginSchema } from "../models/user-schema";
import { useContext } from "react";
import { Context } from "../context/user/Context";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userLogin>({
    resolver: zodResolver(userLoginSchema),
  });

  const { dispatch, isFetching } = useContext(Context);

  const onSubmit: SubmitHandler<userLogin> = (data) => {
    dispatch({ type: "LOGIN_START" });
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl isInvalid={errors.email && true}>
              <Input
                borderColor="gray.300"
                placeholder="Email address"
                variant="flushed"
                type="email"
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.password && true}>
              <Input
                borderColor="gray.300"
                placeholder="Password"
                variant="flushed"
                type="password"
                id="password"
                {...register("password")}
              />
              {errors.password && (
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              )}
            </FormControl>
            <Stack>
              <Button type="submit" width="full" colorScheme="green">
                Login
              </Button>
              <Button width="full" colorScheme="red">
                Login with Google
              </Button>
              <Text textAlign="center">
                Not have an account ?{" "}
                <Text color="green" as={Link} to="/register">
                  <Text as="span">Register</Text>
                </Text>
              </Text>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
