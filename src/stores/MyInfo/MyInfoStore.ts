import { persist, createJSONStorage } from 'zustand/middleware';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { MyInfoDispatcher, MyInfoState, categoryType, productsType } from './MyInfoStore.types';

const MyInfoStorageKey = 'myinfo-storage';

const initialState: MyInfoState = {
	isLogin: !!localStorage.getItem('accessToken'),
	isApproved: false,
	storeImageUrl: null,
	storeName: null,
	category: [],
	products: [],
};

export const useMyInfoStore = create(
	persist<MyInfoDispatcher>(
		(set) => ({
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
			dispatchProducts: (value: productsType[]) => {
				set({ products: value });
			},
			clear: () => set({ ...initialState }, true),
		}),
		{
			name: MyInfoStorageKey,
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);
