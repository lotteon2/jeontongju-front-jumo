import APIService from '../../libs/core/api/APIService';
import { GetProductListResponse } from './searchAPIService.typs';

const BASE_URL = `${process.env.REACT_APP_API_URL}/search-service/api`;

class SearchAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async getMyProductList(page: number, sort: string, size: number) {
		const { data } = await this.get<GetProductListResponse>(`/sellers/products?page=${page}&sort=${sort}&size=${size}`);
		return data;
	}
}

export const searchApi: SearchAPIService = SearchAPIService.shared();
