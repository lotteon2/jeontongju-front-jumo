import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../apis/authentication/authAPIService";
import { Toast } from "../../components/common/Toast";
import { useMyInfoStore } from "../../stores/MyInfo/MyInfoStore";

export const useLogin = () => {
  const navigate = useNavigate();

  const { dispatchIsLogin } = useMyInfoStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFinish = async () => {
    console.log("login test");
    console.log("email", email);
    console.log("password", password);
    await authApi.login({ email, password }).then((res) => {
      console.log(res);
      if (res.code === 200) {
        Toast(true, "로그인되었어요");
        dispatchIsLogin(true);
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/");
      }
    });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    onFinish,
  };
};
