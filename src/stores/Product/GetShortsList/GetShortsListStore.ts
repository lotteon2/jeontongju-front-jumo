import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { GetShortsListDispatcher, GetShortsListState } from './GetShortsListStore.types';

const initialState: GetShortsListState = {
	page: 1,
	sort: '',
	size: 10,
};

export const useGetShortsListStore = create(
	immer<GetShortsListDispatcher>((set) => ({
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
