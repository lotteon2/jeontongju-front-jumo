interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data: T;
	failure?: string;
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

export type GetMyOrderListResponseData = {
	ordersId: number;
	productId: string;
	productName: string;
	productCount: number;
	productTotalAmount: number;
	orderDate: string;
	paymentType: 'NAVER';
	orderStatus: 'ORDER';
	deliveryId: number;
	deliveryCode: null | string;
	isAuction: boolean;
};

export type RegisterDeliveryCodeParams = {
	deliveryCode: string;
};

export type GetMyOrderForDashBoardResponseData = {
	order: number;
	shipping: number;
	completed: number;
	confirmed: number;
	cancel: number;
	monthSales: number;
	monthSettlement: number;
	stockUnderFive: number;
	trackingNumberNotEntered: number;
	monday: number;
	tuesday: number;
	wednesday: number;
	thursday: number;
	friday: number;
	saturday: number;
	sunday: number;
};
export type GetMyOrderListResponse = ApiResponse<Page<GetMyOrderListResponseData[]>>;
export type RegisterDeliveryCodeResponse = ApiResponse<string>;
export type ConfirmDeliveryResponse = ApiResponse<string>;
export type GetMyCashUpImageResponse = ApiResponse<{ settlementImgUrl: string }>;
export type GetMyOrderForDashBoardResponse = ApiResponse<GetMyOrderForDashBoardResponseData>;
