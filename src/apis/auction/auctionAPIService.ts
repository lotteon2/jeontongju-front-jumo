import APIService from '../../libs/core/api/APIService';
import {
	ApplyAuctionParams,
	ApplyAuctionResponse,
	GetAvailableAuctionListResponse,
	GetMyApplyAuctionListResponse,
} from './auctionAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/auction-service/api`;

class AuctionAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async getAvailableAuctionList() {
		const { data } = await this.get<GetAvailableAuctionListResponse>('/auction/seller');
		return data;
	}

	async applyAuction(params: ApplyAuctionParams) {
		const { data } = await this.post<ApplyAuctionResponse>('/auction/product', params);
		return data;
	}

	async getMyApplyAuctionList() {
		const { data } = await this.get<GetMyApplyAuctionListResponse>('/auction/detail/seller');
		return data;
	}
}

export const auctionApi: AuctionAPIService = AuctionAPIService.shared();
