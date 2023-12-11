import { APPROVE } from '../../constants/ApproveType';

export interface MyInfoState {
	isLogin: boolean;
	approvalState: keyof typeof APPROVE;
	storeImageUrl: string;
	storeName: string;
	category: categoryType[];
	products: productsType[];
}

export type categoryType = {
	categoryId: number;
	categoryName: string;
};

export type productsType = {
	value: string;
	label: string;
};

export interface MyInfoDispatcher extends MyInfoState {
	dispatchIsLogin: (value: boolean) => void;
	dispatchApprovalState: (value: string) => void;
	dispatchStoreImageUrl: (value: string) => void;
	dispatchStoreName: (value: string) => void;
	dispatchCategory: (value: categoryType[]) => void;
	dispatchProducts: (value: productsType[]) => void;
	clear: () => void;
}
