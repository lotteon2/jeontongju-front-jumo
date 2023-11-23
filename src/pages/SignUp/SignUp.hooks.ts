import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sellerApi } from '../../apis/seller/sellerAPIService';
import { Toast } from '../../components/common/Toast';

export const useSignUp = () => {
  const navigate = useNavigate();
  // email 인증 눌렀을 때 중복이 아닌 경우에만
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidEmailCode, setIsValidEmailCode] = useState<boolean>(false);
  const [authCode, setAuthCode] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [emailCode, setEmailCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');
  const [storeName, setStoreName] = useState<string>(null);
  const [storeDescription, setStoreDescription] = useState<string>(null);
  const [storeImageUrl, setStoreImageUrl] = useState<string>(null);
  const [storePhoneNumber, setStorePhoneNumber] = useState<string>(null);
  const [businessLicenseDocumentsUrl, setBusinessLicenseDocumentsUrl] = useState<string>('');
  const [impUid, setImpUid] = useState<string>('');

  const handleCheckEmail = async () => {
    const data = await sellerApi.emailCheck(email);
    if (data.code === 200) {
      console.log('here');
      setIsValidEmail(true);
      setAuthCode(data.data.authCode);
    }
    console.log(data);
  };

  const handleCheckEmailCode = async () => {
    if (emailCode === authCode) {
      setIsValidEmailCode(true);
    }
  };

  const callback = (response) => {
    const { success, error_msg: errorMsg, imp_uid: responseImpUid } = response;

    if (success) {
      console.log(response);
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

  const onFinish = async () => {
    if (password !== checkPassword) {
      return;
    }

    if (password !== checkPassword) {
      return;
    }

    if (
      !email
      || !password
      || !storeName
      || !storeDescription
      || !storeImageUrl
      || !storePhoneNumber
      || !impUid
    ) return;

    const data = await sellerApi.signUp({
      email,
      password,
      storeName,
      storeDescription,
      storeImageUrl,
      storePhoneNumber,
      businessLicenseDocumentsUrl,
      impUid,
    });
    if (data.code === 200) {
      Toast(true, '회원가입이 되었어요.');
      navigate('/init/login');
    }
    console.log(data);
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
  };
};
