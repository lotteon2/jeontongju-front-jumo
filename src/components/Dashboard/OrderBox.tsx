import styled from '@emotion/styled';
import { ORDER_STATE, translateOrderState } from '../../constants/OrderStateType';

const OrderBox = ({ orderState, count }: { orderState: keyof typeof ORDER_STATE; count: number }) => {
	return (
		<StyledOrderBox>
			<h3>{translateOrderState(orderState)}</h3>
			<div>{count}</div>
		</StyledOrderBox>
	);
};

export default OrderBox;

const StyledOrderBox = styled.div`
	border-radius: 12px;
	background-color: #cccc;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	cursor: pointer;
	padding: 1rem;
	flex: 1;
	justify-content: center;
	align-items: center;
`;
