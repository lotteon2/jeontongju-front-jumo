import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { RegisterDeliveryDispatcher, RegisterDeliveryState } from './RegisterDeliveryStore.types';

const initialState: RegisterDeliveryState = {
	deliveryId: null,
	deliveryCode: null,
};

export const useRegisterDeliveryStore = create(
	immer<RegisterDeliveryDispatcher>((set) => ({
		...initialState,
		dispatchDeliveryCode: (value: string) => {
			set({ deliveryCode: value });
		},
		dispatchDeliveryId: (value: number) => {
			set({ deliveryId: value });
		},
		clear: () => set({}, true),
	})),
);
