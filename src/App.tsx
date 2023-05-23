import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import WritePost from "./pages/WritePost";
import UserSettings from "./pages/UserSettings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter } from "react-router-dom";
import { checkAuthLoader } from "./auth";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "write", element: <WritePost />, loader: checkAuthLoader },
      { path: "settings", element: <UserSettings />, loader: checkAuthLoader },
      { path: "post/:postId", element: <PostDetail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
