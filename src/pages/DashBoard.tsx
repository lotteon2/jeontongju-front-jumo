import styled from '@emotion/styled';
import OrderBox from '../components/Dashboard/OrderBox';
import { useGetMyOrderDashBoardQuery } from '../queries/useGetMyOrderDashBoardQuery';

const DashBoard = () => {
	const { data: orderDashBoard } = useGetMyOrderDashBoardQuery();
	return (
		<div>
			<StyleOrderContainer>
				<OrderBox orderState="ORDER" count={orderDashBoard ? orderDashBoard?.data.order : 0} />
				<OrderBox orderState="SHIPPING" count={orderDashBoard ? orderDashBoard?.data.shipping : 0} />
				<OrderBox orderState="COMPLETED" count={orderDashBoard ? orderDashBoard?.data.completed : 0} />
				<OrderBox orderState="CONFIRMED" count={orderDashBoard ? orderDashBoard?.data.confirmed : 0} />
				<OrderBox orderState="CANCEL" count={orderDashBoard ? orderDashBoard?.data.cancel : 0} />
			</StyleOrderContainer>
		</div>
	);
};
export default DashBoard;

const StyleOrderContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
