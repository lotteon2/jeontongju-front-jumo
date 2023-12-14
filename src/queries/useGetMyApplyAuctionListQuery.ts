import { auctionApi } from '../apis/auction/auctionAPIService';
import { useQuery } from '../libs/core/react-query';

const GET_MY_APPLY_AUCTION_LIST_QUERY = '@auction/get/mylist';
export const useGetMyApplyAuctionListQuery = () =>
	useQuery([GET_MY_APPLY_AUCTION_LIST_QUERY], () => auctionApi.getMyApplyAuctionList(), {
		enabled: true,
	});
