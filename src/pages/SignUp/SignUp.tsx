import { Input, Form, Radio } from "antd";
import styled from "@emotion/styled";
import { useSignUp } from "./SignUp.hooks";
import { SignUpFieldType } from "../../constants/SignUpFieldType";
import Button from "../../components/common/Button";

const SignUp = () => {
  const { email, setEmail, password, setPassword, onFinish } = useSignUp();

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, width: "100%" }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<SignUpFieldType>
          label="이메일"
          name="email"
          rules={[{ required: true, message: "이메일을 입력해주세요" }]}
        >
          <Input
            placeholder="로그인에 사용할 이메일을 입력해주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            content="인증"
            Key="loginAdmin"
            handleClick={onFinish}
            htmlType="button"
          />
        </Form.Item>
        <Form.Item<SignUpFieldType>
          label="이메일 유효코드"
          name="emailCode"
          rules={[{ required: true, message: "이메일을 입력해주세요" }]}
        >
          <Input
            placeholder="이메일로 전송된 유효 코드를 입력해주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            content="확인"
            Key="checkEmailCode"
            handleClick={onFinish}
            htmlType="button"
          />
        </Form.Item>

        <Form.Item<SignUpFieldType>
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
        >
          <Input.Password
            placeholder="비밀번호 조건 추가."
            value={password as string}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item<SignUpFieldType>
          label="비밀번호 확인"
          name="passwordCheck"
          rules={[
            { required: true, message: "비밀번호를 다시 한 번 입력해주세요." },
          ]}
        >
          <Input.Password
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            value={password as string}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item<SignUpFieldType>
          label="주모 이름"
          name="name"
          rules={[{ required: true, message: "주모 이름을 입력해주세요." }]}
        >
          <Input
            placeholder="고객들에게 보여질 주모 이름을 입력해주세요."
            value={password as string}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item<SignUpFieldType>
          label="주모 소개"
          name="desc"
          rules={[{ required: true, message: "주모소개를 입력해주세요." }]}
        >
          <Input
            placeholder="고객들에게 보여질 주모 소개를 입력해주세요."
            value={password as string}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item<SignUpFieldType>
          label="주모 대표 번호"
          name="tel"
          rules={[{ required: true, message: "주모 대표번호를 입력해주세요." }]}
        >
          <Input
            value={password as string}
            placeholder="고객이 문의할 대표 번호를 입력해주세요.(숫자만)"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item<SignUpFieldType>
          label="설빙고 가입 여부(추후 수정 불가)"
          name="isSulbing"
          rules={[
            { required: true, message: "설빙고 가입 여부를 입력해주세요." },
          ]}
        >
          <Radio.Group>
            <Radio value={1}>평생 인연 맺기</Radio>
            <Radio value={2}>다음생에 인연 맺기</Radio>
          </Radio.Group>
        </Form.Item>
        <Button
          content="주모 가입 신청하기"
          Key="loginAdmin"
          isfull
          handleClick={onFinish}
          htmlType="submit"
        />
      </Form>
      <StyledSignUpFooter>
        <a href="/">설빙고에 대해 더 알고 싶어요.</a>
      </StyledSignUpFooter>
    </>
  );
};
export default SignUp;

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

const StyledSignUpFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
