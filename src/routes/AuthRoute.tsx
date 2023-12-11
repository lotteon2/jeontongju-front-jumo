import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useMyInfoStore } from '../stores/MyInfo/MyInfoStore';
import MainLayout from '../layouts/MainLayout';
import { useGetMyInfoQuery } from '../queries/useGetMyInfoQuery';

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

	// useEffect(() => {
	//   if (isLogin) {
	//     // 첫 진입시 받아와야함
	//     console.log("here");
	//     if (myInfo.data !== undefined) {
	//       setIsApproved(myInfo.data.approvalState);
	//       setStoreImageUrl(myInfo.data.storeImageUrl);
	//       setStoreName(myInfo.data.storeName);
	//       setCategory(myInfo.data.category);
	//     }

	//     console.log(isApproved);
	//   }
	// }, []);

	return isLogin && approvalState === 'ALLOW' ? (
		<MainLayout />
	) : isLogin && approvalState === 'WAIT' ? (
		<Navigate to="/init/waiting" />
	) : (
		<Navigate to="/init/login" />
	);
};

export default AuthRoute;
