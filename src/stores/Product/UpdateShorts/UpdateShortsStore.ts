import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { UpdateShortsDispatcher, UpdateShortsState } from './UpdateShortsStore.types';

const initialState: UpdateShortsState = {
	selectedShortsId: null,
	selectedShortsTitle: null,
	selectedShortsExplanation: null,
	selectedTargetId: null,
	selectedIsActive: null,
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
		dispatchSelectedShortsExplanation: (value: string) => {
			set({ selectedShortsExplanation: value });
		},
		dispatchSelectedTargetId: (value: string) => {
			set({ selectedTargetId: value });
		},
		dispatchSelectedShortsThumbnail: (value: string) => {
			set({ selectedShortsThumbnail: value });
		},
		dispatchSelectedIsActive: (value: boolean) => {
			set({ selectedIsActive: value });
		},
		clear: () => set({}, true),
	})),
);
