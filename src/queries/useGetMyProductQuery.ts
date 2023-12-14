import { productApi } from '../apis/product/productAPIService';
import { useQuery } from '../libs/core/react-query';

const GET_MY_PRODUCT_QUERY = '@seller/get/myproduct';
export const useGetMyProductQuery = () =>
	useQuery([GET_MY_PRODUCT_QUERY], () => productApi.getMyProduct(), {
		enabled: true,
	});
