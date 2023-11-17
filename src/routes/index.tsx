import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import DashBoard from "../pages/DashBoard";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Waiting from "../pages/Waiting";
import FindMyPassword from "../pages/FindMyPassword/FindMyPassword";
import AddProduct from "../pages/Product/AddProduct/AddProduct";

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
    path: "/dashboard",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [{ index: true, path: "dashboard", element: <DashBoard /> }],
  },
  {
    path: "/product",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "add", element: <AddProduct /> },
      { index: true, path: "list", element: <DashBoard /> },
    ],
  },
  {
    path: "/cash",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "up", element: <DashBoard /> },
      { index: true, path: "list", element: <DashBoard /> },
    ],
  },
  {
    path: "/sulbing",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "payfor", element: <DashBoard /> },
      { index: true, path: "list", element: <DashBoard /> },
    ],
  },
  {
    path: "/etc",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "shorts", element: <DashBoard /> },
      { index: true, path: "live", element: <DashBoard /> },
    ],
  },
]);
export default router;
