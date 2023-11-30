import { useState } from 'react';
import { authApi } from '../../apis/authentication/authAPIService';

export const useFindMyPassword = () => {
	const [email, setEmail] = useState<string>('');
	const [authCode, setAuthCode] = useState<string>(null);
	const [inputAuthCode, setInputAuthCode] = useState<string>('');
	const [authUser, setAuthUser] = useState<boolean>(false);
	const [newPassword, setNewPassword] = useState<string>(null);

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
		}
	};

	const onSubmitNewPassword = () => {
		console.log(newPassword);
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
