export const ERROR = {
	OVER_PARTICIPATION: 'OVER_PARTICIPATION',
} as const;

type ERROR = (typeof ERROR)[keyof typeof ERROR];

export const translateErrorEnumToUserMessage = (error: ERROR) => {
	let translatedUserMessage = '';
	switch (error) {
		case 'OVER_PARTICIPATION':
			translatedUserMessage = '참여 인원이 초과되었어요.';
			break;
		default:
			translatedUserMessage = '';
	}
	return translatedUserMessage;
};
