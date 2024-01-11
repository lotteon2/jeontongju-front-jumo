import styled from '@emotion/styled';
import { ORDER_STATE, translateOrderState } from '../../constants/OrderStateType';

const OrderBox = ({ orderState, count }: { orderState: keyof typeof ORDER_STATE; count: number }) => {
	return (
		<StyledOrderBox>
			<div>{translateOrderState(orderState)}</div>
			<div>{count}</div>
		</StyledOrderBox>
	);
};

export default OrderBox;

const StyledOrderBox = styled.div`
	border-radius: 12px;
	background-color: #c0c0c0;
	display: flex;
	cursor: pointer;
`;
