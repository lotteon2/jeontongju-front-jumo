import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form } from 'antd';
import { useState } from 'react';
import { sellerApi } from '../../../apis/seller/sellerAPIService';
import { Alert } from '../../../components/common/Alert';
import { Toast } from '../../../components/common/Toast';
import { EditMyShopInfoFieldType } from '../../../constants/EditMyShopInfoFieldType';
import { useMyInfoStore } from '../../../stores/MyInfo/MyInfoStore';

export const useEditMyShopInfo = () => {
	const [form] = Form.useForm();
	const { register, handleSubmit, getValues, control } = useForm<EditMyShopInfoFieldType>({
		mode: 'onBlur',
	});

	const [storeName, storeImageUrl, storeDescription, storePhoneNumber] = useMyInfoStore((state) => [
		state.storeName,
		state.storeImageUrl,
		state.storeDescription,
		state.storePhoneNumber,
	]);

	const [imageUrl, setImageUrl] = useState<string>(storeImageUrl);

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

	const handleChangeImageUrl = (E) => {
		console.log(E);
		setImageUrl(E);
		// setImageUrl(e.target.value);
	};

	const isAbleToEdit = () => {
		if (
			getValues('storeDescription') === storeDescription &&
			getValues('storeName') === storeName &&
			getValues('storePhoneNumber') === storePhoneNumber
		)
			return 'disabled';
		return 'positive';
	};

	const onSubmit = handleSubmit(async (data: EditMyShopInfoFieldType) => {
		console.log(data);

		if (!data.storeDescription || !data.storeImageUrl || !data.storeName || !data.storePhoneNumber) {
			Toast(false, '수정할 정보를 모두 입력해주세요.');
			return;
		}
		try {
			const res = await sellerApi.updateMyInfo({
				storeDescription,
				storeImageUrl: imageUrl,
				storeName,
				storePhoneNumber,
			});
			if (res.code === 200) {
				Toast(true, '주모 정보가 성공적으로 수정되었어요.');
			} else {
				Toast(false, '주모 정보 수정에 실패했어요');
			}
		} catch (error) {
			Toast(false, error.message);
		}
	});

	return {
		handleWithdraw,
		onSubmit,
		isAbleToEdit,
		form,
		register,
		control,
		imageUrl,
		handleChangeImageUrl,
	};
};
