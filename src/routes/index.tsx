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
import ProductList from "../pages/Product/ProductList/ProductList";
import CashUp from "../pages/Cash/CashUp/CashUp";
import OrderList from "../pages/Cash/OrderList/OrderList";
import LiveList from "../pages/LiveList/LiveList";
import LiveRegister from "../pages/LiveRegister/LiveRegister";

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
      { index: true, path: "list", element: <ProductList /> },
    ],
  },
  {
    path: "/cash",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "up", element: <CashUp /> },
      { path: "list", element: <OrderList /> },
    ],
  },
  {
    path: "/etc",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "shorts", element: <DashBoard /> },
      { path: "live", element: <LiveList /> },
      { path: "live/register", element: <LiveRegister /> },
    ],
  },
]);
export default router;
