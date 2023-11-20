import { Form, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { EditMyShopInfoFieldType } from "../../../constants/EditMyShopInfoFieldType";
import Button from "../../../components/common/Button";

const EditMyShopInfo = () => {
  const [form] = Form.useForm();
  const { register, handleSubmit, control } = useForm<EditMyShopInfoFieldType>({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data: EditMyShopInfoFieldType) => {
    console.log(data);
  });

  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: "100%" }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item<EditMyShopInfoFieldType>
          label="주모 이름"
          name="storeName"
          rules={[{ required: true, message: "주모 이름을 입력해주세요" }]}
        >
          <Controller
            name="storeName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="고객들에게 보여질 주모 이름을 입력해주세요."
              />
            )}
          />
        </Form.Item>
        <Form.Item<EditMyShopInfoFieldType>
          label="주모 짧은 소개"
          name="storeDescription"
          rules={[{ required: true, message: "주모 소개를 입력해주세요" }]}
        >
          <Controller
            name="storeDescription"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="고객들에게 보여질 주모 소개를 입력해주세요."
              />
            )}
          />
        </Form.Item>
        <Form.Item<EditMyShopInfoFieldType>
          label="주모 대표 번호"
          name="storeDescription"
          rules={[{ required: true, message: "주모 대표 번호를 입력해주세요" }]}
        >
          <Controller
            name="storeDescription"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="고객들에게 보여질 대표 번호를 입력해주세요."
              />
            )}
          />
        </Form.Item>
        <Button
          content="수정하기"
          width="10rem"
          Key="editMyShopInfo"
          handleClick={onSubmit}
          htmlType="submit"
        />
      </Form>
    </div>
  );
};
export default EditMyShopInfo;
