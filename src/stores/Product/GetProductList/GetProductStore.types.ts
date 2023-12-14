export interface GetProductState {
	page: number;
	sort: string;
	size: number;
}

export interface GetProductStateDispatcher extends GetProductState {
	dispatchPage: (value: number) => void;
	dispatchSort: (value: string) => void;
	dispatchSize: (value: number) => void;
	clear: () => void;
}
