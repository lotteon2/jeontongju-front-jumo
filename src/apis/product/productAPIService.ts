import APIService from '../../libs/core/api/APIService';
import {
	DeleteProductResponse,
	RegisterProductParams,
	RegisterProductResponse,
	UpdateProductParams,
	UpdateProductResponse,
} from './productAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/product-service/api`;

class ProductAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async registerProduct(params: RegisterProductParams) {
		const { data } = await this.post<RegisterProductResponse>('/products', params);
		return data;
	}

	async updateProduct(productId: number, params: UpdateProductParams) {
		const { data } = await this.patch<UpdateProductResponse>(`/products/${productId}`, params);
		return data;
	}

	async deleteProduct(productId: string) {
		const { data } = await this.delete<DeleteProductResponse>(`/products/${productId}`);
		return data;
	}
}

export const productApi: ProductAPIService = ProductAPIService.shared();
