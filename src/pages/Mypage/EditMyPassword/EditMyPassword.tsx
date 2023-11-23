import { Input } from 'antd';
import styled from '@emotion/styled';
import Button from '../../../components/common/Button';
import { useEditMyPassword } from './EditMyPassword.hooks';

const EditMyPassword = () => {
  const {
    originalPassword,
    setOriginalPassword,
    handleCheckMyPassword,
    isRightPassword,
    newPassword,
    setNewPassword,
    checkPassword,
    setCheckPassword,
    updateMyPassword,
  } = useEditMyPassword();
  return (
    <StyledEditMyPassword>
      <div>
        <h3>현재 비밀번호를 입력해주세요.</h3>
        <StyledCheckMyCurrentPassword>
          <Input.Password
            required
            value={originalPassword}
            onChange={(e) => setOriginalPassword(e.target.value)}
            disabled={isRightPassword}
          />
          <Button
            content="확인"
            Key="checkMyCurrentPassword"
            handleClick={handleCheckMyPassword}
          />
        </StyledCheckMyCurrentPassword>
      </div>
      {isRightPassword && (
        <StyledNewPasswordContainer>
          <h3>새로 지정할 비밀번호를 입력해주세요.</h3>
          <Input.Password
            required
            value={newPassword}
            placeholder="영문, 숫자, 특수문자를 모두 포함하여 8자이상 16자 이내로 입력해주세요."
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <h3>새로 지정할 비밀번호를 한 번 더 입력해주세요.</h3>
          <Input.Password
            required
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
          <Button
            content="수정"
            Key="updateMyPassword"
            handleClick={() => updateMyPassword()}
          />
        </StyledNewPasswordContainer>
      )}
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

const StyledNewPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
