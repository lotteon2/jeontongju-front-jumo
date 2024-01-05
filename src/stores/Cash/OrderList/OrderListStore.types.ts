export interface OrderListStore {
	startDate: string;
	endDate: string;
	isDeliveryCodeNull: boolean;
	page: number;
	size: number;
	productId: string;
	orderState: string;
}

export interface OrderListDispatcher extends OrderListStore {
	dispatchStartDate: (value: string) => void;
	dispatchEndDate: (value: string) => void;
	dispatchIsDeliveryCodeNull: (value: boolean) => void;
	dispatchPage: (value: number) => void;
	dispatchSize: (value: number) => void;
	dispatchProductId: (value: string) => void;
	dispatchOrderState: (value: string) => void;
	clear: () => void;
}
