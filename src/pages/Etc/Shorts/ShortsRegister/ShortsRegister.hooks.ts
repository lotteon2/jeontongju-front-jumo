import { useForm } from 'react-hook-form';
import { Form } from 'antd';
import { useEffect, useState } from 'react';
import { RegisterShortParams } from '../../../../apis/product/productAPIService.types';
import { useMyInfoStore } from '../../../../stores/MyInfo/MyInfoStore';
import { useAddShortsStore } from '../../../../stores/Product/AddShorts/AddShortsStore';
import { productApi } from '../../../../apis/product/productAPIService';
import { Toast } from '../../../../components/common/Toast';

export const useShortsRegister = () => {
	const [disabled, setDisabled] = useState<boolean>(false);

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
		console.log(value);
	};
	console.log(getValues('shortsTitle'));
	// TODO  : image, video 추가
	const onSubmit = handleSubmit(async (data: RegisterShortParams) => {
		console.log(data);
		console.log(selectedProductId);
		const params = { ...data, productId: selectedProductId };
		await productApi
			.registerShort(params)
			.then((res) => {
				Toast(true, '쇼츠 등록이 완료되었어요.');
			})
			.catch((err) => {
				console.log(err);
			});
	});

	useEffect(() => {
		if (getValues('shortsTitle') && getValues('shortsDescription')) {
			setDisabled(false);
		} else setDisabled(true);
	}, [getValues('shortsTitle'), getValues('shortsDescription')]);

	return {
		handleSelectedProduct,
		products,
		handleSubmit,
		onSubmit,
		control,
		form,
		disabled,
	};
};
