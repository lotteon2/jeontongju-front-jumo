import styled from '@emotion/styled';
import OrderBox from '../components/Dashboard/OrderBox';
import { useGetMyOrderDashBoardQuery } from '../queries/useGetMyOrderDashBoardQuery';
import CashBox from '../components/Dashboard/CashBox';
import TodoBox from '../components/Dashboard/TodoBox';

const DashBoard = () => {
	const { data: orderDashBoard } = useGetMyOrderDashBoardQuery();
	return (
		<StyledDashBoard>
			<StyledOrderContainer>
				<OrderBox orderState="ORDER" count={orderDashBoard ? orderDashBoard?.data.order : 0} />
				<OrderBox orderState="SHIPPING" count={orderDashBoard ? orderDashBoard?.data.shipping : 0} />
				<OrderBox orderState="COMPLETED" count={orderDashBoard ? orderDashBoard?.data.completed : 0} />
				<OrderBox orderState="CONFIRMED" count={orderDashBoard ? orderDashBoard?.data.confirmed : 0} />
				<OrderBox orderState="CANCEL" count={orderDashBoard ? orderDashBoard?.data.cancel : 0} />
			</StyledOrderContainer>
			<StyledCashTodoContainer>
				<CashBox
					monthSales={orderDashBoard ? orderDashBoard?.data.monthSales : 0}
					monthSettlement={orderDashBoard ? orderDashBoard?.data.monthSettlement : 0}
				/>
				<TodoBox
					stockUnderFive={orderDashBoard ? orderDashBoard?.data.stockUnderFive : 0}
					trackingNumberNotEntered={orderDashBoard ? orderDashBoard?.data.trackingNumberNotEntered : 0}
				/>
			</StyledCashTodoContainer>
		</StyledDashBoard>
	);
};
export default DashBoard;

const StyledDashBoard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledOrderContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledCashTodoContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
