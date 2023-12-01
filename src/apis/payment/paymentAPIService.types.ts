interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data?: T;
	failure?: string;
}

export type GetMyCashUpImageResponse = ApiResponse<{ settlementImgUrl: string }>;
