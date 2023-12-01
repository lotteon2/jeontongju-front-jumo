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

export interface UpdateMyPasswordParams {
	email: string;
	memberRole: string;
	newPassword: string;
}

export type LoginResponseData = {
	accessToken: string;
};

export type LoginResponse = ApiResponse<LoginResponseData>;
export type SignUpResponse = ApiResponse<string>;
export type EmailCheckResponse = ApiResponse<{ authCode: string }>;
export type UpdateMyPasswordResponse = ApiResponse<string>;
export type CheckMyPasswordResponse = ApiResponse<string>;
export type CheckMyEmailResponse = ApiResponse<{ authCode: string }>;
export type UpdateMyPasswordBeforeLoginResponse = ApiResponse<string>;
