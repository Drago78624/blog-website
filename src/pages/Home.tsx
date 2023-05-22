import { Box, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import CustomContainer from "../components/CustomContainer";

const Home = () => {
  return (
    <>
      <Header />
      <CustomContainer>
        <Posts />
        <Sidebar />
      </CustomContainer>
    </>
  );
};

export default Home;
