import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { MyInfoDispatcher, MyInfoState, categoryType, productsType } from './MyInfoStore.types';
import { APPROVE } from '../../constants/ApproveType';

const initialState: MyInfoState = {
	isLogin: !!localStorage.getItem('accessToken'),
	approvalState: 'WAIT',
	storeDescription: '',
	storeImageUrl: null,
	storeName: null,
	category: [],
	products: [],
	storePhoneNumber: null,
};

export const useMyInfoStore = create(
	immer<MyInfoDispatcher>((set) => ({
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
		dispatchStorePhoneNumber: (value: string) => {
			set({ storePhoneNumber: value });
		},
		dispatchStoreDescription: (value: string) => {
			set({ storeDescription: value });
		},
		dispatchCategory: (value: categoryType[]) => {
			set({ category: value });
		},
		dispatchProducts: (value: productsType[]) => {
			set({ products: value });
		},
		clear: () => set({ ...initialState }, true),
	})),
);
