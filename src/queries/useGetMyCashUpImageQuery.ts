import { orderApi } from '../apis/order/orderAPIService';
import { useQuery } from '../libs/core/react-query';
import { useCashUpStore } from '../stores/Cash/CashUp/CashUpStore';

const GET_MY_CASH_UP_IMAGE_QUERY = '@payment/get';
export const useGetMyCashUpImageQuery = () => {
	const [searchMonth, searchYear] = useCashUpStore((state) => [state.searchMonth, state.searchYear]);
	return useQuery(
		[GET_MY_CASH_UP_IMAGE_QUERY, searchMonth, searchYear],
		() => orderApi.getMyCashUpImage(searchYear, searchMonth),
		{
			enabled: true,
		},
	);
};
