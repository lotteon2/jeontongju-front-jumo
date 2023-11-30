interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data: T;
	failure?: string;
}

export interface LoginParams {
	email: string;
	password: string;
}

export interface SignUpParams {
	email: string;
	password: string;
	storeName: string;
	storeDescription: string;
	storeImageUrl: string;
	storePhoneNumber: string;
	businessLicenseDocumentsUrl: string;
	impUid: string;
}

export type LoginResponseData = {
	accessToken: string;
};

export type LoginResponse = ApiResponse<LoginResponseData>;
export type SignUpResponse = ApiResponse<string>;
export type EmailCheckResponse = ApiResponse<{ authCode: string }>;
