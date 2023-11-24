import { RegisterProductParams } from '../product/productAPIService.types';

interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data?: T;
}

export interface GetProductListResponseData extends RegisterProductParams {
	productId: string;
	reviewCount: number;
	shortsId: number;
	totalSalesCount: number;
	isActivate: boolean;
	stockQuantity: number;
}

export type GetProductListResponse = ApiResponse<GetProductListResponseData[]>;
