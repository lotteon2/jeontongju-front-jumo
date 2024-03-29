import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from '../../components/common/Toast';
import { authApi } from '../../apis/authentication/authAPIService';

export const useSignUp = () => {
	const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

	const navigate = useNavigate();
	const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
	const [isValidEmailCode, setIsValidEmailCode] = useState<boolean>(false);
	const [authCode, setAuthCode] = useState<string>('');

	const [email, setEmail] = useState<string>('');
	const [emailCode, setEmailCode] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [checkPassword, setCheckPassword] = useState<string>('');
	const [storeName, setStoreName] = useState<string>(null);
	const [storeDescription, setStoreDescription] = useState<string>(null);
	const [storeImageUrl, setStoreImageUrl] = useState<string>('');
	const [storePhoneNumber, setStorePhoneNumber] = useState<string>(null);
	const [impUid, setImpUid] = useState<string>('');

	const handleCheckEmail = async () => {
		if (!emailRegex.test(email)) {
			Toast(false, '유효한 이메일을 입력해주세요.');
			return;
		}
		try {
			const data = await authApi.emailCheck(email);
			if (data.code === 200) {
				if (data.failure) {
					setIsValidEmail(false);
					Toast(false, '중복된 이메일이에요.');
				} else {
					setIsValidEmail(true);
					setAuthCode(data.data.authCode);
				}
			}
		} catch (error) {
			Toast(false, '서버 에러');
		}
	};

	const isAbleToSendEmail = () => {
		if (!email || isValidEmailCode) {
			return 'disabled';
		}
		return 'positive';
	};
	const handleCheckEmailCode = async () => {
		if (emailCode === authCode) {
			setIsValidEmailCode(true);
		}
	};

	const callback = (response) => {
		const { success, error_msg: errorMsg, imp_uid: responseImpUid } = response;

		if (success) {
			setImpUid(responseImpUid);
			Toast(true, '성인인증이 완료되었습니다');
		} else {
			Toast(false, errorMsg);
		}
	};

	const handleAdultValid = async () => {
		if (!window.IMP) return;
		const { IMP } = window;
		IMP.init(process.env.REACT_APP_INICIS);
		const data = {
			pg: 'inicis_unified',
			popup: true,
		};

		IMP.certification(data, callback);
	};

	const checkRegisterDisabled = () => {
		if (password !== checkPassword) return 'disabled';
		if (!email || !password || !storeName || !storeDescription || !storePhoneNumber || !impUid || !storeImageUrl)
			return 'disabled';
		return 'positive';
	};

	const onFinish = async () => {
		if (password !== checkPassword) {
			Toast(false, '비밀번호가 일치하지않아요.');
			return;
		}

		if (!isValidEmailCode) {
			Toast(false, '이메일 인증을 해주세요.');
			return;
		}

		if (!email || !password || !storeName || !storeDescription || !storePhoneNumber || !impUid) return;

		const data = await authApi.signUp({
			email,
			password,
			storeName,
			storeDescription,
			storeImageUrl,
			storePhoneNumber,
			impUid,
		});
		if (data.code === 200) {
			Toast(true, '회원가입이 되었어요.');
			navigate('/init/login');
		}
	};

	return {
		email,
		setEmail,
		password,
		setPassword,
		emailCode,
		setEmailCode,
		checkPassword,
		setCheckPassword,
		storeName,
		setStoreName,
		storeDescription,
		setStoreDescription,
		storePhoneNumber,
		setStorePhoneNumber,
		onFinish,
		handleCheckEmail,
		isValidEmail,
		handleCheckEmailCode,
		isValidEmailCode,
		handleAdultValid,
		checkRegisterDisabled,
		isAbleToSendEmail,
		storeImageUrl,
		setStoreImageUrl,
	};
};
