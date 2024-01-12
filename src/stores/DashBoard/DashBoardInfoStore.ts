import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { MyDashBoardDispatcher, MyDashBoardState } from './DashBoardInfoStore.types';

export const getDashboardCashUpDate = () => {
	const currDate = new Date();
	const year = currDate.getFullYear();
	const month = currDate.getMonth() + 1;
	const day = currDate.getDate();
	return `${year}-${month >= 10 ? month : `0${month}`}-01 ~${year}-${month >= 10 ? month : `0${month}`}-${
		day >= 10 ? day : `0${day}`
	}`;
};

const getCurrDate = () => {
	const currDate = new Date();
	const year = currDate.getFullYear();
	const month = currDate.getMonth() + 1;
	const day = currDate.getDate();
	return `${year}${month >= 10 ? month : `0${month}`}${day >= 10 ? day : `0${day}`}`;
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
