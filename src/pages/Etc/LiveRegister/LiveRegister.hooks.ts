import { Form } from 'antd';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LiveRegisterFieldType } from '../../../constants/LiveRegisterFieldType';
import { auctionApi } from '../../../apis/auction/auctionAPIService';
import { Toast } from '../../../components/common/Toast';
import { useApplyAuctionMutation } from '../../../mutations/auction/useApplyAuctionMutation';
import { ERROR, translateErrorEnumToUserMessage } from '../../../constants/ErrorEnum/ErrorType';
import { Alert } from '../../../components/common/Alert';

export const useLiveRegister = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { mutateAsync } = useApplyAuctionMutation();

	const [disabled, setDisabled] = useState<boolean>(true);
	const [form] = Form.useForm();
	const { handleSubmit, control, getValues, watch } = useForm<LiveRegisterFieldType>({
		mode: 'onBlur',
		defaultValues: {
			auctionProductName: null,
			startingPrice: null,
			thumbnailImageUrl: '',
			description: null,
			capacity: null,
			alcoholDegree: null,
		},
	});

	const onSubmit = handleSubmit(async (data: LiveRegisterFieldType) => {
		const params = { ...data, auctionId: state.auctionId };
		const result = await mutateAsync(params);
		if (result.code === 200) {
			if (result.failure === ERROR.OVER_PARTICIPATION) {
				Alert({
					title: '라이브 경매 신청에 실패했어요.',
					text: translateErrorEnumToUserMessage(result.failure),
					submitBtnText: '닫기',
					errorMessage: true,
				});
			} else {
				Toast(true, '라이브 경매 신청이 완료되었어요.');
				navigate('/etc/live');
			}
		} else {
			Toast(false, '라이브 경매 신청에 실패했어요.');
		}
	});

	useEffect(() => {
		if (
			watch('alcoholDegree') &&
			watch('auctionProductName') &&
			watch('capacity') &&
			watch('description') &&
			watch('startingPrice')
		) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [
		watch('alcoholDegree'),
		watch('auctionProductName'),
		watch('capacity'),
		watch('description'),
		watch('startingPrice'),
	]);

	return {
		form,
		control,
		onSubmit,
		title: state.title || '',
		disabled,
	};
};
