import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { AddShortsDispatcher, AddShortsState } from './AddShortsStore.types';

const initialState: AddShortsState = {
	selectedProductId: null,
};

export const useAddShortsStore = create(
	immer<AddShortsDispatcher>((set) => ({
		...initialState,
		dispatchSelectProductId: (value: string) => {
			set({ selectedProductId: value });
		},
		clear: () => set({}, true),
	})),
);
