import { orderApi } from '../apis/order/orderAPIService';
import { useQuery } from '../libs/core/react-query';
import { useMyDashBoardStore } from '../stores/DashBoard/DashBoardInfoStore';

const GET_MY_DASHBOARD_ORDER = '@dashboard/order/get';
export const useGetMyOrderDashBoardQuery = () => {
	const date = useMyDashBoardStore((state) => state.date);
	return useQuery([GET_MY_DASHBOARD_ORDER], () => orderApi.getMyDashBoard(date), {
		enabled: true,
	});
};
