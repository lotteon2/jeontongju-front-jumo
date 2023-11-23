import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useMyInfoStore } from "../stores/MyInfo/MyInfoStore";
import MainLayout from "../layouts/MainLayout";

const AuthRoute = () => {
  const { isLogin } = useMyInfoStore();

  return isLogin ? <MainLayout /> : <Navigate to="/init/login" />;
};

export default AuthRoute;
