import APIService from '../../libs/core/api/APIService';
import {
	DeleteProductResponse,
	GetMyProductResponse,
	GetShortListResponse,
	RegisterProductParams,
	RegisterProductResponse,
	RegisterShortParams,
	RegisterShortResponse,
	UpdateProductParams,
	UpdateProductResponse,
	UpdateShortParams,
	UpdateShortsResponse,
} from './productAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/product-service/api`;

class ProductAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async getMyProduct() {
		const { data } = await this.get<GetMyProductResponse>('/sellers/info/product');
		return data;
	}

	async registerProduct(params: RegisterProductParams) {
		const { data } = await this.post<RegisterProductResponse>('/products', params);
		return data;
	}

	async updateProduct(productId: string, params: UpdateProductParams) {
		const { data } = await this.patch<UpdateProductResponse>(`/products/${productId}`, params);
		return data;
	}

	async deleteProduct(productId: string) {
		const { data } = await this.delete<DeleteProductResponse>(`/products/${productId}`);
		return data;
	}

	async registerShort(params: RegisterShortParams) {
		const { data } = await this.post<RegisterShortResponse>(`/shorts`, params);
		return data;
	}

	// TODO : 배포시 url 바뀜
	async getShortList(page: number, sort: string, size: number) {
		const { data } = await this.get<GetShortListResponse>(`/sellers/shorts?page=${page}&sort=${sort}&size=${size}`);
		return data;
	}

	// TODO : 배포시 url 바뀜
	async updateShort(shortsId: number, params: UpdateShortParams) {
		const { data } = await this.patch<UpdateShortsResponse>(`/sellers/shorts/${shortsId}}`, params);
		return data;
	}

	async deleteShort(shortsId: number) {
		const { data } = await this.delete<UpdateShortsResponse>(`${shortsId}`);
		return data;
	}
}

export const productApi: ProductAPIService = ProductAPIService.shared();
