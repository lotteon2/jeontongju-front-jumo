import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { OrderListDispatcher, OrderListStore } from './OrderListStore.types';

const initialState: OrderListStore = {
	selectedDate: null,
	isDeliveryCodeNull: false,
	page: 0,
	size: 10,
	productId: null,
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
		dispatchSelectedDate: (value: string) => {
			set({ selectedDate: value });
		},
		clear: () => {
			set(initialState);
		},
	})),
);
