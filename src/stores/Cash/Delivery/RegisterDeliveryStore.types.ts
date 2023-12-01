export interface RegisterDeliveryState {
	deliveryId: number;
	deliveryCode: string;
}

export interface RegisterDeliveryDispatcher extends RegisterDeliveryState {
	dispatchDeliveryId: (value: number) => void;
	dispatchDeliveryCode: (value: string) => void;
}
