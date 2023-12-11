import { persist, createJSONStorage } from 'zustand/middleware';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { MyInfoDispatcher, MyInfoState, categoryType, productsType } from './MyInfoStore.types';
import { APPROVE } from '../../constants/ApproveType';

const MyInfoStorageKey = 'myinfo-storage';

const initialState: MyInfoState = {
	isLogin: !!localStorage.getItem('accessToken'),
	approvalState: 'WAIT',
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
			dispatchApprovalState: (value: keyof typeof APPROVE) => {
				set({ approvalState: value });
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
