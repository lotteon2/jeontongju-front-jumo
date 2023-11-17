import { Form, Input } from "antd";
import styled from "@emotion/styled";
import { useFindMyPassword } from "./FindMyPassword.hooks";
import { LoginFieldType } from "../../constants/LoginFieldType";
import Button from "../../components/common/Button";

const FindMyPassword = () => {
  const { email, setEmail, onFinish } = useFindMyPassword();

  return (
    <StyledFindContainer>
      <span>회원가입 당시 사용했던 이메일을 입력해주세요.</span>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<LoginFieldType>
          label="이메일"
          name="email"
          rules={[{ required: true, message: "이메일을 입력해주세요." }]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Button
          content="이메일 발송"
          Key="findMyPassword"
          isfull
          handleClick={onFinish}
          htmlType="submit"
        />
      </Form>
      <span>이메일로 새로 생성된 비밀번호를 발송했어요.</span>
    </StyledFindContainer>
  );
};
export default FindMyPassword;

const StyledFindContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;
