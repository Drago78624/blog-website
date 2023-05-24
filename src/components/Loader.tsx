import { Container, Flex } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <Container maxW={1400} mt={10}>
      <Flex justifyContent="center">
        <ClipLoader color="#36d7b7" size={80} />
      </Flex>
    </Container>
  );
};

export default Loader;
