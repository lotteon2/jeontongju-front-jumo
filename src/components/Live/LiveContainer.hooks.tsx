import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useLiveModal = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    console.log("here");
    setIsModalOpen(false);
    console.log(isModalOpen);
  };
  const handleOk = () => {
    navigate("/etc/live/register");
    setIsModalOpen(false);
    console.log(isModalOpen);
  };
  return {
    isModalOpen,
    showModal,
    handleCancel,
    handleOk,
  };
};
