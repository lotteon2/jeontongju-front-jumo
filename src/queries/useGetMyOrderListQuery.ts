import { orderApi } from '../apis/order/orderAPIService';
import { useQuery } from '../libs/core/react-query';
import { useMyOrderListStore } from '../stores/Cash/OrderList/OrderListStore';

const GET_PRODUCT_LIST = '@order/get/orderList';
export const useGetMyOrderListQuery = () => {
	const [page, size, isDeliveryCodeNull, productId, startDate, endDate, orderState] = useMyOrderListStore((state) => [
		state.page,
		state.size,
		state.isDeliveryCodeNull,
		state.productId,
		state.startDate,
		state.endDate,
		state.orderState,
	]);

	return useQuery(
		[GET_PRODUCT_LIST, page, size, isDeliveryCodeNull, productId, startDate, endDate, orderState],
		() =>
			orderApi.getMyOrderList(page - 1, size, isDeliveryCodeNull, productId, startDate, endDate, orderState || null),
		{
			enabled: true,
		},
	);
};
