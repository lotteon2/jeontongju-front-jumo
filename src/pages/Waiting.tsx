import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/common/Button';
import { useMyInfoStore } from '../stores/MyInfo/MyInfoStore';
import { useGetMyInfoQuery } from '../queries/useGetMyInfoQuery';

const Waiting = () => {
  const navigate = useNavigate();
  const { dispatchIsApproved } = useMyInfoStore();

  const { data: myInfo } = useGetMyInfoQuery();

  useEffect(() => {
    if (!myInfo) return;
    console.log(myInfo);
    if (myInfo.data) dispatchIsApproved(myInfo.data.approvalState);
  }, [myInfo]);
  return (
    <StyledWaiting>
      <h1>주모 입점 승인 대기중이에요.</h1>
      <h3>기타 궁금한 점은 전통주. 고객센터로 문의해주세요.</h3>
      <Button
        content="메인으로 가기"
        Key="goHome"
        isfull
        handleClick={() => navigate('/')}
      />
    </StyledWaiting>
  );
};
export default Waiting;

const StyledWaiting = styled.div`
  padding: 0 5rem;
  gap: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
