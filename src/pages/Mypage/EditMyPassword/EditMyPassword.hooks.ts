import { useState } from "react";
import { sellerApi } from "../../../apis/seller/sellerAPIService";
import { Toast } from "../../../components/common/Toast";

export const useEditMyPassword = () => {
  const [originalPassword, setOriginalPassword] = useState<string>(null);
  const [newPassword, setNewPassword] = useState<string>(null);
  const [checkPassword, setCheckPassword] = useState<string>(null);
  const [isRightPassword, setIsRightPassword] = useState<boolean>(false);

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  const updateMyPassword = async () => {
    if (newPassword !== checkPassword) {
      Toast(false, "입력한 두 비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!passwordRegex.test(newPassword)) {
      Toast(
        false,
        "영문, 숫자, 특수문자를 모두 포함하여 8자이상 16자 이내로 입력해주세요.",
      );
    } else {
      await sellerApi.updateMyPassword(newPassword).then((res) => {
        if (res.code === 200) {
          Toast(true, "비밀번호 수정이 완료되었어요.");
        }
      });
    }
  };

  const handleCheckMyPassword = async () => {
    if (!originalPassword) {
      Toast(false, "기존 비밀번호를 입력해주세요");
      return;
    }

    await sellerApi.checkMyPassword(originalPassword).then((res) => {
      console.log(res);
      if (res.code === 200) {
        setIsRightPassword(true);
      }
    });
  };

  return {
    updateMyPassword,
    handleCheckMyPassword,
    originalPassword,
    setOriginalPassword,
    isRightPassword,
    newPassword,
    setNewPassword,
    checkPassword,
    setCheckPassword,
  };
};
