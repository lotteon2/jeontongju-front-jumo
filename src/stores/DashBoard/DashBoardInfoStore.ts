import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { MyDashBoardDispatcher, MyDashBoardState } from './DashBoardInfoStore.types';

const getCurrDate = () => {
	const currDate = new Date();
	const year = currDate.getFullYear();
	const month = currDate.getMonth() + 1;
	return `${year}${month >= 10 ? month : `0${month}`}`;
};

const initialState: MyDashBoardState = {
	date: getCurrDate(),
};

export const useMyDashBoardStore = create(
	immer<MyDashBoardDispatcher>((set) => ({
		...initialState,
		dispatchDate: (value: string) => set({ date: value }),
		clear: () => set({ ...initialState }, true),
	})),
);
