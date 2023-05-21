import { Box, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Header />
      <Container height={2000} maxW={1400} mt={6}>
        <Box display="flex" gap={20}>
          <Posts />
          <Sidebar />
        </Box>
      </Container>
    </>
  );
};

export default Home;
