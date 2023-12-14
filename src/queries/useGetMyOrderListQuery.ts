import { orderApi } from '../apis/order/orderAPIService';
import { useQuery } from '../libs/core/react-query';
import { useMyOrderListStore } from '../stores/Cash/OrderList/OrderListStore';

const GET_PRODUCT_LIST = '@order/get/orderList';
export const useGetMyOrderListQuery = () => {
	const [page, size, isDeliveryCodeNull, productId, selectedDate] = useMyOrderListStore((state) => [
		state.page,
		state.size,
		state.isDeliveryCodeNull,
		state.productId,
		state.selectedDate,
	]);

	return useQuery(
		[GET_PRODUCT_LIST, page, size, isDeliveryCodeNull, productId, selectedDate],
		() => orderApi.getMyOrderList(page, size, isDeliveryCodeNull, productId, selectedDate),
		{
			enabled: true,
		},
	);
};
