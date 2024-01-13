import { CONCEPT } from '../../constants/ProductType/ConceptType';
import { RAW_MATERIAL } from '../../constants/ProductType/MaterialType';
import { SNACK } from '../../constants/ProductType/SnackType';
import { categoryType } from '../../stores/MyInfo/MyInfoStore.types';
import { Page } from '../search/searchAPIService.typs';

interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data?: T;
	failure?: string;
}

export interface RegisterProductParams {
	productName: string;
	productDescription: string;
	productThumbnailImageUrl: string;
	productAlcoholDegree: number;
	productCapacity: number;
	breweryName: string;
	breweryZonecode: string;
	breweryAddress: string;
	breweryAddressDetails?: string;
	manufacturer: string;
	productPrice: number;
	registeredQuantity: number;
	productDetailsImageUrl: string;
	categoryId: string;
	taste: {
		sour: number;
		sweet: number;
		scent: number;
		carbonation: number;
		body: number;
	};
	rawMaterial: (keyof typeof RAW_MATERIAL)[];
	food?: (keyof typeof SNACK)[];
	concept?: (keyof typeof CONCEPT)[];
}

export interface UpdateProductParams {
	productName?: string;
	productThumbnailImageUrl?: string;
	productDetailsImageUrl?: string;
	productPrice?: number;
	registeredQuantity?: number;
	isActivate?: boolean;
}

export interface RegisterShortParams {
	shortsTitle: string;
	shortsDescription: string;
	shortsVideoUrl: string;
	shortsPreviewUrl: string;
	shortsThumbnailImageUrl: string;
	productId?: string; // 보내면 상품에 등록, 안 보내면 주모 사이트로 연결
	isActivate: boolean;
}

export interface UpdateShortParams {
	shortsTitle?: string;
	shortsDescription?: string;
	isActivate?: boolean;
}

export interface GetMyProductResponseData {
	value: string;
	label: string;
}

export interface GetShortListResponseData {
	shortsId: number;
	shortsTitle: string;
	shortsThumbnailUrl?: string;
	shortsDescription: string;
	shortsVideoUrl: string;
	targetId: string;
	shortsHits: number;
	isActivate: boolean;
	shortsThumbnailImageUrl?: string;
}

export type GetMyProductResponse = ApiResponse<GetMyProductResponseData[]>;

export type RegisterProductResponse = ApiResponse<string>;

export type UpdateProductResponse = ApiResponse<string>;

export type DeleteProductResponse = ApiResponse<string>;

export type RegisterShortResponse = ApiResponse<string>;

export type GetShortListResponse = ApiResponse<Page<GetShortListResponseData[]>>;

export type UpdateShortsResponse = ApiResponse<string>;

export type GetCategoryResponse = ApiResponse<categoryType[]>;

export type GetShortsDetailResponse = ApiResponse<GetShortListResponseData>;
