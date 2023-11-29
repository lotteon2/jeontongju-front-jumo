import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { UpdateShortsDispatcher, UpdateShortsState } from './UpdateShortsStore.types';

const initialState: UpdateShortsState = {
	selectedShortsId: null,
	selectedShortsTitle: null,
	selectedShortsDescription: null,
	selectedTargetId: null,
	selectedIsActivate: null,
	selectedShortsThumbnail: null,
};

export const useUpdateShortsStore = create(
	immer<UpdateShortsDispatcher>((set) => ({
		...initialState,
		dispatchSelectedShortsId: (value: number) => {
			set({ selectedShortsId: value });
		},
		dispatchSelectedShortsTitle: (value: string) => {
			set({ selectedShortsTitle: value });
		},
		dispatchSelectedShortsDescription: (value: string) => {
			set({ selectedShortsDescription: value });
		},
		dispatchSelectedTargetId: (value: string) => {
			set({ selectedTargetId: value });
		},
		dispatchSelectedShortsThumbnail: (value: string) => {
			set({ selectedShortsThumbnail: value });
		},
		dispatchSelectedIsActivate: (value: boolean) => {
			set({ selectedIsActivate: value });
		},
		clear: () => set({}, true),
	})),
);
