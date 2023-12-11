import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { sellerApi } from '../../../apis/seller/sellerAPIService';
import { Alert } from '../../../components/common/Alert';
import { Toast } from '../../../components/common/Toast';
import { EditMyShopInfoFieldType } from '../../../constants/EditMyShopInfoFieldType';
import { useMyInfoStore } from '../../../stores/MyInfo/MyInfoStore';

export const useEditMyShopInfo = () => {
	const { register, handleSubmit, getValues, control, watch } = useForm<EditMyShopInfoFieldType>({
		mode: 'onBlur',
	});

	const [storeName, storeImageUrl, storeDescription, storePhoneNumber] = useMyInfoStore((state) => [
		state.storeName,
		state.storeImageUrl,
		state.storeDescription,
		state.storePhoneNumber,
	]);

	const navigate = useNavigate();
	const handleWithdrawMember = async () => {
		await sellerApi.withdraw().then((res) => {
			if (res.code === 200) navigate('/init/login');
			else Toast(false, res.detail);
		});
	};

	const handleWithdraw = async () => {
		Alert({
			title: '정말로 탈퇴하시겠어요?',
			text: '탈퇴하시면 다시 복구할 수 없어요.',
			submitBtnText: '탈퇴하기',
		}).then((res) => {
			if (res.isConfirmed) {
				handleWithdrawMember();
			}
		});
	};

	const isAbleToEdit = () => {
		if (
			getValues('storeDescription') === storeDescription &&
			getValues('storeName') === storeName &&
			getValues('storePhoneNumber') === storePhoneNumber
		)
			return true;
		return false;
	};

	const onSubmit = handleSubmit(async (data: EditMyShopInfoFieldType) => {
		console.log(data);

		if (/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/.test(data.storePhoneNumber)) {
			Toast(false, '전화번호를 입력해주세요');
			return;
		}
		await sellerApi.updateMyInfo({ storeDescription, storeImageUrl, storeName, storePhoneNumber }).then((res) => {
			if (res.code === 200) {
				Toast(true, '주모 정보가 성공적으로 수정되었어요.');
			}
		});
	});

	return {
		handleWithdraw,
		onSubmit,
		isAbleToEdit,
	};
};
