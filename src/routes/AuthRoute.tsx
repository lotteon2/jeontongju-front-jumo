import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useMyInfoStore } from '../stores/MyInfo/MyInfoStore';
import MainLayout from '../layouts/MainLayout';
import { useGetMyInfoQuery } from '../queries/useGetMyInfoQuery';
import { APPROVE } from '../constants/ApproveType';

const AuthRoute = () => {
	const [isLogin, approvalState, setApprovalState, setStoreImageUrl, setStoreName, setCategory] = useMyInfoStore(
		(state) => [
			state.isLogin,
			state.approvalState,
			state.dispatchApprovalState,
			state.dispatchStoreImageUrl,
			state.dispatchStoreName,
			state.dispatchCategory,
		],
	);
	const { data: myInfo } = useGetMyInfoQuery();

	useEffect(() => {
		if (isLogin) {
			// 첫 진입시 받아와야함
			console.log('here');
			console.log(approvalState);
			if (myInfo) {
				setApprovalState(myInfo.data.approvalState);
				setStoreImageUrl(myInfo.data.storeImageUrl);
				setStoreName(myInfo.data.storeName);
			}
		}
	}, []);

	return isLogin && approvalState === APPROVE.ALLOW ? (
		<MainLayout />
	) : isLogin && approvalState === APPROVE.WAIT ? (
		<Navigate to="/init/waiting" />
	) : (
		<Navigate to="/init/login" />
	);
};

export default AuthRoute;
