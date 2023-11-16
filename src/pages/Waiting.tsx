import styled from "@emotion/styled";
import Button from "../components/common/Button";

const Waiting = () => {
  return (
    <StyledWaiting>
      <h1>주모 입점 승인 대기중이에요.</h1>
      <h3>기타 궁금한 점은 전통주. 고객센터로 문의해주세요.</h3>
      <Button content="메인으로 가기" key="goHome" isFull />
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
