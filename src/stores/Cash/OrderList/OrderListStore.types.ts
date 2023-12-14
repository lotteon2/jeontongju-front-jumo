export interface OrderListStore {
	selectedDate: string;
	isDeliveryCodeNull: boolean;
	page: number;
	size: number;
	productId: string;
}

export interface OrderListDispatcher extends OrderListStore {
	dispatchSelectedDate: (value: string) => void;
	dispatchIsDeliveryCodeNull: (value: boolean) => void;
	dispatchPage: (value: number) => void;
	dispatchSize: (value: number) => void;
	dispatchProductId: (value: string) => void;
	clear: () => void;
}
