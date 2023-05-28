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
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterSchema, userRegister } from "../models/user-schema";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userRegister>({
    resolver: zodResolver(userRegisterSchema),
  });

  const onSubmit: SubmitHandler<userRegister> = (data) => {
    console.log(data.firstName);
    console.log(data);
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
          Register
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
              <FormControl isInvalid={errors.firstName && true}>
                <Input
                  borderColor="gray.300"
                  placeholder="First name"
                  variant="flushed"
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                />
                {errors.firstName && <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>}
              </FormControl>
              <FormControl isInvalid={errors.lastName && true}>
                <Input
                  borderColor="gray.300"
                  placeholder="Last name"
                  variant="flushed"
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                />
                {errors.lastName && <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>}
              </FormControl>
            <FormControl isInvalid={errors.email && true}>
              <Input
                borderColor="gray.300"
                placeholder="Email address"
                variant="flushed"
                type="email"
                id="email"
                {...register("email")}
              />
              {errors.email && <FormErrorMessage>{errors.email?.message}</FormErrorMessage>}
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
              {errors.password && <FormErrorMessage>{errors.password?.message}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.confirmPassword && true}>
              <Input
                borderColor="gray.300"
                placeholder="Confirm Password"
                variant="flushed"
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>}
            </FormControl>
            <Stack>
              <Button width="full" colorScheme="green" type="submit">
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
