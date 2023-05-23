import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import WritePost from "./pages/WritePost";
import UserSettings from "./pages/UserSettings";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Box minH="100vh">
      <Navbar />
      {/* <Home /> */}
      {/* <PostDetail /> */}
      {/* <WritePost /> */}
      {/* <UserSettings /> */}
      {/* <Login /> */}
      <Register />
      <Footer />
    </Box>
  );
};

export default App;
