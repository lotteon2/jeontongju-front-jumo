import { auctionApi } from '../apis/auction/auctionAPIService';
import { useQuery } from '../libs/core/react-query';

const GET_AVAILABLE_AUCTION_LIST_QUERY = '@auction/get/available';
export const useGetAvailableAuctionListQuery = () =>
	useQuery([GET_AVAILABLE_AUCTION_LIST_QUERY], () => auctionApi.getAvailableAuctionList(), {
		enabled: true,
	});
