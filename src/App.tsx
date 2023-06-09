import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { checkAuthLoader } from "./auth";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import Error from "./pages/Error";

const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const WritePost = lazy(() => import("./pages/WritePost"));
const UserSettings = lazy(() => import("./pages/UserSettings"));
const PostDetail = lazy(() => import("./pages/PostDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "register",
        element: (
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "write",
        element: (
          <Suspense fallback={<Loader />}>
            <WritePost />
          </Suspense>
        ),
        loader: checkAuthLoader,
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<Loader />}>
            <UserSettings />
          </Suspense>
        ),
        loader: checkAuthLoader,
      },
      {
        path: "post/:postId",
        element: (
          <Suspense fallback={<Loader />}>
            <PostDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
