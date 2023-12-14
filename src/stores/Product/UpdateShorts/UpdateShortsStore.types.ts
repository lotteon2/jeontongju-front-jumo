export interface UpdateShortsState {
	selectedShortsId: number;
	selectedShortsTitle: string;
	selectedShortsDescription: string;
	selectedTargetId: string;
	selectedIsActivate: boolean;
	selectedShortsThumbnail: string;
}

export interface UpdateShortsDispatcher extends UpdateShortsState {
	dispatchSelectedShortsId: (value: number) => void;
	dispatchSelectedShortsTitle: (value: string) => void;
	dispatchSelectedShortsDescription: (value: string) => void;
	dispatchSelectedTargetId: (value: string) => void;
	dispatchSelectedIsActivate: (value: boolean) => void;
	dispatchSelectedShortsThumbnail: (value: string) => void;
	clear: () => void;
}
