export const APPROVE = {
	ALLOW: '승인',
	DENY: '불허가',
	WAIT: '대기',
};

export const translateApproveState = (status: keyof typeof APPROVE) => {
	let translatedApproveState = '';
	switch (status) {
		case 'ALLOW':
			translatedApproveState = '승인';
			break;
		case 'DENY':
			translatedApproveState = '불허가';
			break;
		case 'WAIT':
			translatedApproveState = '대기';
			break;
		default:
			translatedApproveState = '';
	}
	return translatedApproveState;
};
