import { productApi } from '../apis/product/productAPIService';
import { useQuery } from '../libs/core/react-query';
import { useGetShortsListStore } from '../stores/Product/GetShortsList/GetShortsListStore';

const GET_MY_SHORTS_LIST = '@get/product/shorts';
export const useGetMyShortsList = () => {
	const [page, sort, size] = useGetShortsListStore((state) => [state.page, state.sort, state.size]);
	return useQuery([GET_MY_SHORTS_LIST], () => productApi.getShortList(page, sort, size), {
		enabled: true,
	});
};
