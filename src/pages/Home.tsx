import { Box, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Header />
      <Container maxW={1400} mt={6}>
        <Box display={{base: "block", lg: "flex"}} gap={20}>
          <Posts />
          <Sidebar />
        </Box>
      </Container>
    </>
  );
};

export default Home;
