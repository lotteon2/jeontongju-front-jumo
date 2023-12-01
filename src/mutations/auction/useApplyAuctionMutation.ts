import { useIsMutating } from 'react-query';
import { useMutation } from '../../libs/core/react-query';
import { auctionApi } from '../../apis/auction/auctionAPIService';
import { ApplyAuctionParams } from '../../apis/auction/auctionAPIService.types';

const APPLY_AUCTION_MUTATION_KEY = '@auction/apply';

export const useApplyAuctionMutation = () => {
	const { mutateAsync } = useMutation((params: ApplyAuctionParams) => auctionApi.applyAuction(params), {
		mutationKey: [APPLY_AUCTION_MUTATION_KEY],
	});

	const isMutating = useIsMutating([APPLY_AUCTION_MUTATION_KEY]) > 0;

	return {
		mutateAsync,
		isMutating,
	};
};
