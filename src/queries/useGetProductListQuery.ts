import { searchApi } from '../apis/search/searchAPIService';
import { useQuery } from '../libs/core/react-query';
import { useGetProductStore } from '../stores/Product/GetProductList/GetProductStore';

const GET_PRODUCT_LIST = '@search/get/productList';
export const useGetMyProductListQuery = () => {
	const [page, sort, size] = useGetProductStore((state) => [state.page, state.sort, state.size]);
	return useQuery([GET_PRODUCT_LIST], () => searchApi.getMyProductList(page - 1, sort, size), {
		enabled: true,
	});
};
