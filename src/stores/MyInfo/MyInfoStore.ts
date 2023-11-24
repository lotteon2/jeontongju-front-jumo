import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { MyInfoDispatcher, MyInfoState, categoryType } from './MyInfoStore.types';

const initialState: MyInfoState = {
	isLogin: !!localStorage.getItem('accessToken'),
	isApproved: false,
	storeImageUrl: null,
	storeName: null,
	category: [],
};

export const useMyInfoStore = create(
	immer<MyInfoDispatcher>((set) => ({
		...initialState,
		dispatchIsLogin: (value: boolean) => {
			set({ isLogin: value });
		},
		dispatchIsApproved: (value: boolean) => {
			set({ isApproved: value });
		},
		dispatchStoreImageUrl: (value: string) => {
			set({ storeImageUrl: value });
		},
		dispatchStoreName: (value: string) => {
			set({ storeName: value });
		},
		dispatchCategory: (value: categoryType[]) => {
			set({ category: value });
		},
		clear: () => set({ ...initialState }, true),
	})),
);
