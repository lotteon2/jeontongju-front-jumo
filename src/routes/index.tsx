import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';
import DashBoard from '../pages/DashBoard';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Waiting from '../pages/Waiting';
import FindMyPassword from '../pages/FindMyPassword/FindMyPassword';
import AddProduct from '../pages/Product/AddProduct/AddProduct';
import ProductList from '../pages/Product/ProductList/ProductList';
import CashUp from '../pages/Cash/CashUp/CashUp';
import OrderList from '../pages/Cash/OrderList/OrderList';
import LiveList from '../pages/Etc/LiveList/LiveList';
import LiveRegister from '../pages/Etc/LiveRegister/LiveRegister';
import EditMyShopInfo from '../pages/Mypage/EditMyShopInfo/EditMyShopInfo';
import EditMyPassword from '../pages/Mypage/EditMyPassword/EditMyPassword';
import ShortsList from '../pages/Etc/Shorts/ShortsList/ShortsList';
import ShortsDetail from '../pages/Etc/Shorts/ShortsDetail/ShortsDetail';
import ShortsRegister from '../pages/Etc/Shorts/ShortsRegister/ShortsRegister';
import AuthRoute from './AuthRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute />,
    errorElement: <NotFound />,
    children: [{ index: true, path: '', element: <DashBoard /> }],
  },
  {
    path: '/init',
    element: <LoginLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'waiting', element: <Waiting /> },
      { path: 'findMyPassword', element: <FindMyPassword /> },
    ],
  },
  {
    path: '/dashboard',
    element: <AuthRoute />,
    errorElement: <NotFound />,
    children: [{ index: true, path: 'dashboard', element: <DashBoard /> }],
  },
  {
    path: '/product',
    element: <AuthRoute />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: 'add', element: <AddProduct /> },
      { path: 'list', element: <ProductList /> },
    ],
  },
  {
    path: '/cash',
    element: <AuthRoute />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: 'up', element: <CashUp /> },
      { path: 'list', element: <OrderList /> },
    ],
  },
  {
    path: '/etc',
    element: <AuthRoute />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: 'shorts', element: <ShortsList /> },
      { path: 'shorts/detail/:id', element: <ShortsDetail /> },
      { path: 'register', element: <ShortsRegister /> },
      { path: 'live', element: <LiveList /> },
      { path: 'live/register', element: <LiveRegister /> },
    ],
  },
  {
    path: '/edit',
    element: <AuthRoute />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: 'myshop', element: <EditMyShopInfo /> },
      { path: 'myPassword', element: <EditMyPassword /> },
      { path: 'live/register', element: <LiveRegister /> },
    ],
  },
]);
export default router;
