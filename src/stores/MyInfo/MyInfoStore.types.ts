export interface MyInfoState {
	isLogin: boolean;
	isApproved: boolean;
	storeImageUrl: string;
	storeName: string;
	category: categoryType[];
}

export type categoryType = {
	categoryId: number;
	categoryName: string;
};

export interface MyInfoDispatcher extends MyInfoState {
	dispatchIsLogin: (value: boolean) => void;
	dispatchIsApproved: (value: boolean) => void;
	dispatchStoreImageUrl: (value: string) => void;
	dispatchStoreName: (value: string) => void;
	dispatchCategory: (value: categoryType[]) => void;
	clear: () => void;
}
