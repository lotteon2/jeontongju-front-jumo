import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import DashBoard from "../pages/DashBoard";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Waiting from "../pages/Waiting";
import FindMyPassword from "../pages/FindMyPassword/FindMyPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [{ index: true, path: "", element: <DashBoard /> }],
  },
  {
    path: "/init",
    element: <LoginLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "waiting", element: <Waiting /> },
      { path: "findMyPassword", element: <FindMyPassword /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [{ index: true, path: "dashboard", element: <DashBoard /> }],
  },
]);
export default router;
