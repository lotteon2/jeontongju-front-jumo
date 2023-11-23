import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../apis/authentication/authAPIService";
import { Toast } from "../../components/common/Toast";
import { useMyInfoStore } from "../../stores/MyInfo/MyInfoStore";
import { useGetMyInfoQuery } from "../../queries/useGetMyInfoQuery";

export const useLogin = () => {
  const navigate = useNavigate();

  const { data: myInfo } = useGetMyInfoQuery();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [
    isLogin,
    setIsLogin,
    isApproved,
    setIsApproved,
    setStoreImageUrl,
    setStoreName,
    setCategory,
  ] = useMyInfoStore((state) => [
    state.isLogin,
    state.dispatchIsLogin,
    state.isApproved,
    state.dispatchIsApproved,
    state.dispatchStoreImageUrl,
    state.dispatchStoreName,
    state.dispatchCategory,
  ]);

  const onFinish = async () => {
    await authApi.login({ email, password }).then((res) => {
      if (res.code === 200) {
        Toast(true, "로그인되었어요");
        setIsLogin(true);
        if (myInfo.data) {
          setIsApproved(myInfo.data.approvalState);
          setStoreImageUrl(myInfo.data.storeImageUrl);
          setStoreName(myInfo.data.storeName);
          setCategory(myInfo.data.category);
        }

        console.log(isApproved);

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
