import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { OrderListDispatcher, OrderListStore } from './OrderListStore.types';

function getToday() {
	const date = new Date();
	const year = date.getFullYear();
	const month = `0${1 + date.getMonth()}`.slice(-2);
	const day = `0${date.getDate()}`.slice(-2);

	return `${year}${month}${day}`;
}

function getPastDate() {
	const today = new Date();
	const pastDate = new Date(today);
	pastDate.setDate(today.getDate() - 7);

	const year = pastDate.getFullYear();
	const month = String(pastDate.getMonth() + 1).padStart(2, '0');
	const day = String(pastDate.getDate()).padStart(2, '0');

	return `${year}${month}${day}`;
}

const initialState: OrderListStore = {
	startDate: getPastDate(),
	endDate: getToday(),
	isDeliveryCodeNull: false,
	page: 1,
	size: 10,
	productId: null,
	orderState: null,
};

export const useMyOrderListStore = create(
	immer<OrderListDispatcher>((set) => ({
		...initialState,
		dispatchPage: (value: number) => {
			set({ page: value });
		},
		dispatchSize: (value: number) => {
			set({ size: value });
		},
		dispatchIsDeliveryCodeNull: (value: boolean) => {
			set({ isDeliveryCodeNull: value });
		},
		dispatchProductId: (value: string) => {
			set({ productId: value });
		},
		dispatchOrderState: (value: string) => {
			set({ orderState: value });
		},
		dispatchStartDate: (value: string) => {
			set({ startDate: value });
		},
		dispatchEndDate: (value: string) => {
			set({ endDate: value });
		},
		clear: () => {
			set(initialState);
		},
	})),
);
