import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../apis/authentication/authAPIService';
import { Toast } from '../../components/common/Toast';

import { useGetMyInfoQuery } from '../../queries/useGetMyInfoQuery';
import { useMyInfoStore } from '../../stores/MyInfo/MyInfoStore';
import { APPROVE } from '../../constants/ApproveType';

export const useLogin = () => {
	const navigate = useNavigate();

	const { data: myInfo } = useGetMyInfoQuery();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [isLogin, setIsLogin, approvalState, setApprovalState, setStoreImageUrl, setStoreName, setCategory] =
		useMyInfoStore((state) => [
			state.isLogin,
			state.dispatchIsLogin,
			state.approvalState,
			state.dispatchApprovalState,
			state.dispatchStoreImageUrl,
			state.dispatchStoreName,
			state.dispatchCategory,
		]);

	const isAbleToLogin = () => {
		if (!email || !password) return 'disabled';
		return 'positive';
	};

	const onFinish = async () => {
		try {
			const data = await authApi.login({ email, password });
			if (data.code === 200) {
				Toast(true, '로그인되었어요');
				localStorage.setItem('accessToken', data.data.accessToken);
				setIsLogin(true);
				navigate('/');
			} else {
				Toast(false, '아이디와 비밀번호를 확인해주세요');
			}
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		if (!myInfo) return;
		if (myInfo.data) {
			setApprovalState(myInfo.data.approvalState);
			setStoreImageUrl(myInfo.data.storeImageUrl);
			setStoreName(myInfo.data.storeName);
		}
	}, [myInfo]);

	return {
		email,
		setEmail,
		password,
		setPassword,
		onFinish,
		isAbleToLogin,
	};
};
