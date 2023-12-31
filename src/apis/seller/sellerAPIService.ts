import APIService from '../../libs/core/api/APIService';
import {
	GetMyInfoResponse,
	GetSellerInfoResponse,
	UpdateMyInfoParams,
	UpdateMyInfoResponse,
	WithDrawResponse,
} from './sellerAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/seller-service/api`;

class SellerAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async withdraw() {
		const { data } = await this.delete<WithDrawResponse>('/sellers');
		return data;
	}

	async updateMyInfo(params: UpdateMyInfoParams) {
		const { data } = await this.patch<UpdateMyInfoResponse>('/sellers', params);
		return data;
	}

	async getMyInfo() {
		const { data } = await this.get<GetMyInfoResponse>('/sellers/info');
		return data;
	}

	async getSellerInfoForEdit() {
		const { data } = await this.get<GetSellerInfoResponse>('/sellers');
		return data;
	}
}

export const sellerApi: SellerAPIService = SellerAPIService.shared();
