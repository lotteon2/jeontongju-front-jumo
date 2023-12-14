import { RegisterProductParams } from '../product/productAPIService.types';

interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data?: T;
}

export interface Page<T> {
	content: T;
	pageable: {
		sort: {
			empty: boolean;
			sorted: boolean;
			unsorted: boolean;
		};
		offset: number;
		pageSize: number;
		pageNumber: number;
		paged: boolean;
		unpaged: boolean;
	};
	last: boolean;
	totalElements: number;
	totalPages: number;
	size: number;
	number: number;
	sort: {
		empty: boolean;
		sorted: boolean;
		unsorted: boolean;
	};
	first: boolean;
	numberOfElements: number;
	empty: boolean;
}

export interface GetProductListResponseData extends RegisterProductParams {
	productId: string;
	reviewCount: number;
	shortsId: number;
	totalSalesCount: number;
	isActivate: boolean;
	stockQuantity: number;
}

export type GetProductListResponse = ApiResponse<Page<GetProductListResponseData[]>>;
