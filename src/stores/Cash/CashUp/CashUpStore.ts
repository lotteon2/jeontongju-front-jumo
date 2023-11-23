import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { CashUpDispatcher, CashUpState } from './CashUpStore.types';

const initialState: CashUpState = {
  searchYear: new Date().getFullYear().toString(),
  searchMonth: (new Date().getMonth() + 1).toString(),
};

export const useCashUpStore = create(
  immer<CashUpDispatcher>((set) => ({
    ...initialState,
    dispatchSearchYear: (value: string) => {
      set({ searchYear: value });
    },
    dispatchSearchMonth: (value: string) => {
      set({ searchMonth: value });
    },
    clear: () => set({}, true),
  })),
);
