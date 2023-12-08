import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../apis/authentication/authAPIService';
import { Toast } from '../../components/common/Toast';

export const useFindMyPassword = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>('');
	const [authCode, setAuthCode] = useState<string>(null);
	const [inputAuthCode, setInputAuthCode] = useState<string>('');
	const [authUser, setAuthUser] = useState<boolean>(false);
	const [newPassword, setNewPassword] = useState<string>(null);

	const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

	const onSubmitEmail = async () => {
		const data = await authApi.checkMyEmail(email);
		if (data.code === 200) {
			setAuthCode(data.data.authCode);
		}
	};

	const onSubmitAuthCode = () => {
		if (inputAuthCode === authCode) {
			setAuthUser(true);
		} else {
			setAuthUser(false);
			Toast(false, '유효코드를 다시 확인해주세요.');
		}
	};

	const onSubmitNewPassword = async () => {
		if (!passwordRegex.test(newPassword)) {
			Toast(false, '영문, 숫자, 특수문자를 모두 포함하여 8자이상 16자 이내로 입력해주세요.');
		} else {
			const params = {
				email,
				newPassword,
				memberRole: 'ROLE_SELLER',
			};
			const result = await authApi.updateMyPasswordBeforeLogin(params);
			if (result.code === 200) {
				Toast(true, '비밀번호가 변경되었어요.');
				navigate('/init/login');
			}
		}
	};

	return {
		email,
		setEmail,
		authCode,
		onSubmitEmail,
		inputAuthCode,
		authUser,
		setInputAuthCode,
		onSubmitAuthCode,
		newPassword,
		setNewPassword,
		onSubmitNewPassword,
	};
};
