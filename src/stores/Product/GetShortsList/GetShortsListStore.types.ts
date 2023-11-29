export interface GetShortsListState {
	page: number;
	sort: string;
	size: number;
}

export interface GetShortsListDispatcher extends GetShortsListState {
	dispatchPage: (value: number) => void;
	dispatchSort: (value: string) => void;
	dispatchSize: (value: number) => void;
	clear: () => void;
}
