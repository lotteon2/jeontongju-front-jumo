import { Input, Form } from "antd";
import styled from "@emotion/styled";
import { LoginFieldType } from "../../constants/LoginFieldType";
import { useLogin } from "./Login.hooks";
import Button from "../../components/common/Button";

const Login = () => {
  const { email, setEmail, password, setPassword, onFinish } = useLogin();
  return (
    <>
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
          rules={[{ required: true, message: "이메일을 입력해주세요" }]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item<LoginFieldType>
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
        >
          <Input.Password
            value={password as string}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Button
          content="로그인"
          key="loginJumo"
          isFull
          handleClick={onFinish}
          htmlType="submit"
        />
      </Form>
      <StyledLoginFooter>
        <a href="/init/findMyPassword">비밀번호 찾기</a>
        <div> | </div>
        <a href="/init/signUp">회원가입하기</a>
      </StyledLoginFooter>
    </>
  );
};
export default Login;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 2rem;
  .main_logo {
    font-weight: 700;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const StyledLoginFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
