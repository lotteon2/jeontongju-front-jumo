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
	storePhoneNUmber?: string;
}

export interface GetMyInfoResponseData {
	sellerId: number;
	storeName: string;
	storeImageUrl: string;
	approvalState: boolean;
	category: categoryType[];
}

export type WithDrawResponse = ApiResponse<string>;

export type UpdateMyInfoResponse = ApiResponse<string>;

export type GetMyInfoResponse = ApiResponse<GetMyInfoResponseData>;
