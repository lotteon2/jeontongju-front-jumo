import { useState } from "react";
import { useForm } from "react-hook-form";
import { AddProductFieldType } from "../../../constants/AddProductFieldType";

export const useAddProduct = () => {
  const { handleSubmit, control } = useForm<AddProductFieldType>({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data: AddProductFieldType) => {
    console.log(data);
  });

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFinish = async () => {
    // console.log('name', name);
    console.log("email", email);
    console.log("password", password);
  };

  return {
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
    onFinish,
  };
};
