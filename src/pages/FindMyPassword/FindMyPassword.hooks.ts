import { useState } from "react";

export const useFindMyPassword = () => {
  const [email, setEmail] = useState<string>("");

  const onFinish = async () => {
    console.log("login test");
    console.log("email", email);
  };

  return {
    email,
    setEmail,
    onFinish,
  };
};
