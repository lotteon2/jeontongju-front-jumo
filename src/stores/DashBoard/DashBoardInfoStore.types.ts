export interface MyDashBoardState {
	date: string;
}
export interface MyDashBoardDispatcher extends MyDashBoardState {
	dispatchDate: (value: string) => void;
	clear: () => void;
}
