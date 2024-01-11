import OrderBox from '../components/Dashboard/OrderBox';
import { useGetMyOrderDashBoardQuery } from '../queries/useGetMyOrderDashBoardQuery';

const DashBoard = () => {
	const { data: orderDashBoard } = useGetMyOrderDashBoardQuery();
	return (
		<div>
			<div>
				<OrderBox orderState="ORDER" count={orderDashBoard.data.order} />
				<OrderBox orderState="SHIPPING" count={orderDashBoard.data.shipping} />
				<OrderBox orderState="COMPLETED" count={orderDashBoard.data.completed} />
				<OrderBox orderState="CONFIRMED" count={orderDashBoard.data.confirmed} />
				<OrderBox orderState="CANCEL" count={orderDashBoard.data.cancel} />
			</div>
		</div>
	);
};
export default DashBoard;
