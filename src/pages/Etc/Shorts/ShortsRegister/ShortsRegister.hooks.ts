import { useForm } from 'react-hook-form';
import { Form } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterShortParams } from '../../../../apis/product/productAPIService.types';
import { useMyInfoStore } from '../../../../stores/MyInfo/MyInfoStore';
import { useAddShortsStore } from '../../../../stores/Product/AddShorts/AddShortsStore';
import { productApi } from '../../../../apis/product/productAPIService';
import { Toast } from '../../../../components/common/Toast';

export const useShortsRegister = () => {
	const navigate = useNavigate();
	const [disabled, setDisabled] = useState<boolean>(false);
	const [imageUrl, setImageUrl] = useState<string>('');
	const [previewUrl, setPreviewUrl] = useState<string>('');
	const [videoUrl, setVideoUrl] = useState<string>('');

	const [selectedProductId, setSelectedProductId] = useAddShortsStore((state) => [
		state.selectedProductId,
		state.dispatchSelectProductId,
	]);
	const products = useMyInfoStore((state) => state.products);
	const [form] = Form.useForm();

	const { register, handleSubmit, control, getValues } = useForm<RegisterShortParams>({
		mode: 'onBlur',
		defaultValues: {
			shortsTitle: null,
			shortsDescription: null,
			shortsVideoUrl: null,
			shortsThumbnailImageUrl: null,
			productId: null,
			isActivate: true,
		},
	});

	const handleSelectedProduct = (value: any) => {
		setSelectedProductId(value);
	};

	const onSubmit = handleSubmit(async (data: RegisterShortParams) => {
		const params = {
			...data,
			productId: selectedProductId,
			shortsThumbnailImageUrl: imageUrl,
			shortsPreviewUrl: previewUrl,
			shortsVideoUrl: videoUrl,
		};
		const res = await productApi.registerShort(params);
		if (res.code === 200) {
			Toast(true, '쇼츠 등록이 완료되었어요.');
			navigate('/etc/shorts');
		} else {
			Toast(false, '쇼츠 필수 값을 입력해주세요');
		}
	});

	return {
		handleSelectedProduct,
		products,
		handleSubmit,
		onSubmit,
		control,
		form,
		disabled,
		imageUrl,
		setImageUrl,
		videoUrl,
		setVideoUrl,
		previewUrl,
		setPreviewUrl,
	};
};
