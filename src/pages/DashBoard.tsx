import styled from '@emotion/styled';
import OrderBox from '../components/Dashboard/OrderBox';
import { useGetMyOrderDashBoardQuery } from '../queries/useGetMyOrderDashBoardQuery';
import CashBox from '../components/Dashboard/CashBox';
import TodoBox from '../components/Dashboard/TodoBox';
import BarChart from '../components/Dashboard/BarChart';
import { useGetMyReviewDashBoardQuery } from '../queries/useGetMyReviewDashBoardQuery';
import ReviewBox from '../components/Dashboard/ReviewBox';

const DashBoard = () => {
	const { data: orderDashBoard } = useGetMyOrderDashBoardQuery();
	const { data: reviewDashBoard } = useGetMyReviewDashBoardQuery();
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
			<StyledReviewContainer>
				<StyledFlexContainer>
					{reviewDashBoard?.data?.data?.map((it) => <ReviewBox params={it} key={it.reviewId} />)}
					{reviewDashBoard?.data?.data.length === 0 && <div>리뷰가 없어요.</div>}
				</StyledFlexContainer>
				<BarChart chartName="오늘 기준 전 7일 주문량" data={orderDashBoard?.data?.weeklySales} />
			</StyledReviewContainer>
		</StyledDashBoard>
	);
};
export default DashBoard;

const StyledDashBoard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledReviewContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
	gap: 1rem;
	justify-content: space-between;
`;

const StyledFlexContainer = styled.div`
	flex: 1;
`;

const StyledOrderContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledCashTodoContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
