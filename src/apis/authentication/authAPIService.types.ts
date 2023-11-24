interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data: T;
}

export interface LoginParams {
	email: string;
	password: string;
}

export type LoginResponseData = {
	accessToken: string;
};
export type LoginResponse = ApiResponse<LoginResponseData>;
