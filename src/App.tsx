import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";

const App = () => {
  return (
    <Box minH="100vh">
      <Navbar />
      {/* <Home /> */}
      <PostDetail />
      <Footer />
    </Box>
  );
};

export default App;
