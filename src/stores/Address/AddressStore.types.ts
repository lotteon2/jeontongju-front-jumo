export interface AddressState {
	selectedCategoryId: string;
	breweryAddressDetail: string;
	breweryZonecode: string;
	breweryAddress: string;
}

export interface AddressStateDispatcher extends AddressState {
	dispatchSelectedCategoryId: (value: string) => void;
	dispatchBreweryAddressDetail: (value: string) => void;
	dispatchBreweryZonecode: (value: string) => void;
	dispatchBreweryAddresss: (value: string) => void;
	clear: () => void;
}
