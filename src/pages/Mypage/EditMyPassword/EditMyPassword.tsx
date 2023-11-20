import { Input } from "antd";
import styled from "@emotion/styled";
import Button from "../../../components/common/Button";

const EditMyPassword = () => {
  return (
    <StyledEditMyPassword>
      <div>
        <h3>현재 비밀번호를 입력해주세요.</h3>
        <StyledCheckMyCurrentPassword>
          <Input.Password required />
          <Button content="확인" Key="checkMyCurrentPassword" />
        </StyledCheckMyCurrentPassword>
      </div>
      <div>
        <h3>새로 지정할 비밀번호를 입력해주세요.</h3>
        <Input.Password required />
        <h3>새로 지정할 비밀번호를 한 번 더 입력해주세요.</h3>
        <Input.Password required />
      </div>
    </StyledEditMyPassword>
  );
};
export default EditMyPassword;

const StyledEditMyPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledCheckMyCurrentPassword = styled.div`
  display: flex;
  gap: 2rem;
`;
