import { useNavigate } from "react-router-dom";
import { sellerApi } from "../../../apis/seller/sellerAPIService";
import { Alert } from "../../../components/common/Alert";
import { Toast } from "../../../components/common/Toast";

export const useEditMyShopInfo = () => {
  const navigate = useNavigate();
  const handleWithdrawMember = async () => {
    await sellerApi.withdraw().then((res) => {
      if (res.code === 200) navigate("/init/login");
      else Toast(false, res.detail);
    });
  };

  const handleWithdraw = async () => {
    Alert({
      title: "정말로 탈퇴하시겠어요?",
      text: "탈퇴하시면 다시 복구할 수 없어요.",
      submitBtnText: "탈퇴하기",
    }).then((res) => {
      if (res.isConfirmed) {
        handleWithdrawMember();
      }
    });
  };

  return {
    handleWithdraw,
  };
};
