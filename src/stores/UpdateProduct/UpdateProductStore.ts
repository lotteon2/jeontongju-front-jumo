import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { UpdateProductTableDataType } from '../../constants/TableDataType/UpdateProductTableDataType';
import { UpdateProductStateDispatcher } from './UpdateProductStore.types';

const initialState: UpdateProductTableDataType = {
	key: 0,
	productThumbnail: '',
	productDetailImg: '',
	productName: '',
	productId: '',
	productPrice: 0,
	productSumCount: 0,
	productStock: 0,
	productReviewCount: 0,
	productShortsId: 0,
	productVisibility: true,
};

export const useUpdateProductStore = create(
	immer<UpdateProductStateDispatcher>((set) => ({
		...initialState,
		dispatchProductThumbnail: (value: string) => {
			set({ productThumbnail: value });
		},
		dispatchProductDetailImg: (value: string) => {
			set({ productDetailImg: value });
		},
		dispatchProductName: (value: string) => {
			set({ productName: value });
		},
		dispatchProductPrice: (value: number) => {
			set({ productPrice: value });
		},
		dispatchProductStock: (value: number) => {
			set({ productStock: value });
		},
		dispatchProductVisibility: (value: boolean) => {
			set({ productVisibility: value });
		},
		clear: () => set({}, true),
	})),
);
