import styled from "@emotion/styled";
import {
  ORDER_STATE,
  translateOrderState,
} from "../../constants/OrderStateType";

const OrderState = ({ state }: { state: keyof typeof ORDER_STATE }) => {
  return <StyledOrderState>{translateOrderState(state)}</StyledOrderState>;
};
export default OrderState;

const StyledOrderState = styled.div`
  width: 3rem;
  border: none;
`;
