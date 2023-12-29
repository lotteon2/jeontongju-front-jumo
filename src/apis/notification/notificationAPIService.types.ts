interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data: T;
	failure?: string;
}

export type ReadAllNotiResponse = ApiResponse<string>;

export type ReadNotiByNotiIdResponse = ApiResponse<string>;
