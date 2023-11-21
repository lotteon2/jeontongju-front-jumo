import { useState } from "react";
import { authApi } from "../../apis/authentication/authAPIService";

export const useLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFinish = async () => {
    console.log("login test");
    console.log("email", email);
    console.log("password", password);
    await authApi.login({ email, password }).then((res) => {
      console.log(res);
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
