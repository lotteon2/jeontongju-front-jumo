import { sellerApi } from '../apis/seller/sellerAPIService';
import { useQuery } from '../libs/core/react-query';

const GET_MY_INFO_QUERY = '@seller/get/myinfo';
export const useGetMyInfoQuery = () =>
	useQuery([GET_MY_INFO_QUERY, localStorage.getItem('accessToken')], () => sellerApi.getMyInfo(), {
		enabled: true,
	});
