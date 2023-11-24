import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { AddressState, AddressStateDispatcher } from './AddressStore.types';

const initialState: AddressState = {
	selectedCategoryId: null,
	breweryAddressDetail: null,
	breweryZonecode: null,
	breweryAddress: null,
};

export const useAddressStore = create(
	immer<AddressStateDispatcher>((set) => ({
		...initialState,
		dispatchSelectedCategoryId: (value: string) => {
			set({ selectedCategoryId: value });
		},
		dispatchBreweryAddresss: (value: string) => {
			set({ breweryAddress: value });
		},
		dispatchBreweryAddressDetail: (value: string) => {
			set({ breweryAddressDetail: value });
		},
		dispatchBreweryZonecode: (value: string) => {
			set({ breweryZonecode: value });
		},
		clear: () => set({}, true),
	})),
);
