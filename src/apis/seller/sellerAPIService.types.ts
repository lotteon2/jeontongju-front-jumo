import { APPROVE } from '../../constants/ApproveType';
import { categoryType } from '../../stores/MyInfo/MyInfoStore.types';

interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data?: T;
	failure?: string;
}

export interface UpdateMyInfoParams {
	storeName?: string;
	storeDescription?: string;
	storeImageUrl?: string;
	storePhoneNumber?: string;
}

export interface GetMyInfoResponseData {
	sellerId: number;
	storeName: string;
	storeImageUrl: string;
	approvalState: keyof typeof APPROVE;
}

export interface GetSellerInfoResponseData {
	email: string;
	storeName: string;
	storeDescription: string;
	storePhoneNumber: string;
	storeImageUrl: string;
}

export type WithDrawResponse = ApiResponse<string>;

export type UpdateMyInfoResponse = ApiResponse<string>;

export type GetMyInfoResponse = ApiResponse<GetMyInfoResponseData>;

export type GetSellerInfoResponse = ApiResponse<GetSellerInfoResponseData>;
