export interface UpdateShortsState {
	selectedShortsId: number;
	selectedShortsTitle: string;
	selectedShortsExplanation: string;
	selectedTargetId: string;
	selectedIsActive: boolean;
	selectedShortsThumbnail: string;
}

export interface UpdateShortsDispatcher extends UpdateShortsState {
	dispatchSelectedShortsId: (value: number) => void;
	dispatchSelectedShortsTitle: (value: string) => void;
	dispatchSelectedShortsExplanation: (value: string) => void;
	dispatchSelectedTargetId: (value: string) => void;
	dispatchSelectedIsActive: (value: boolean) => void;
	dispatchSelectedShortsThumbnail: (value: string) => void;
	clear: () => void;
}
