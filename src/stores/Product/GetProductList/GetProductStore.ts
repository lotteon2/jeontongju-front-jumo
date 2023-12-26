import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { GetProductState, GetProductStateDispatcher } from './GetProductStore.types';

const initialState: GetProductState = {
	page: 1,
	sort: '',
	size: 10,
};

export const useGetProductStore = create(
	immer<GetProductStateDispatcher>((set) => ({
		...initialState,
		dispatchPage: (value: number) => {
			set({ page: value });
		},
		dispatchSort: (value: string) => {
			set({ sort: value });
		},
		dispatchSize: (value: number) => {
			set({ size: value });
		},

		clear: () => set({}, true),
	})),
);
