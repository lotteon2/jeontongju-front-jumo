import styled from "@emotion/styled";
import { Input } from "antd";
import {
  ORDER_STATE,
  translateOrderState,
} from "../../constants/OrderStateType";
import Button from "../common/Button";

const OrderState = ({ state }: { state: keyof typeof ORDER_STATE }) => {
  return (
    <div>
      {state === ORDER_STATE.ORDER ? (
        <StyledOrderInput>
          <Input placeholder="운송장 번호를 입력해주세요." />
          <Button content="저장" Key="saveOrderNumber" btntype="cancel" />
        </StyledOrderInput>
      ) : (
        <StyledOrderState>{translateOrderState(state)}</StyledOrderState>
      )}
    </div>
  );
};
export default OrderState;

const StyledOrderState = styled.div`
  border-radius: 8px;
  text-align: center;
  background-color: var(--primary-green);
  color: white;
`;

const StyledOrderInput = styled.div`
  display: flex;
`;
