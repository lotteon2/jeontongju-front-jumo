export interface AddShortsState {
	selectedProductId: string;
}

export interface AddShortsDispatcher extends AddShortsState {
	dispatchSelectProductId: (value: string) => void;
	clear: () => void;
}
