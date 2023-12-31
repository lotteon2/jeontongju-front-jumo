import { Form } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAddressStore } from '../../../stores/Address/AddressStore';
import { RegisterProductParams } from '../../../apis/product/productAPIService.types';
import { productApi } from '../../../apis/product/productAPIService';
import { Toast } from '../../../components/common/Toast';

export const useAddProduct = () => {
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [productDetailsImageUrl, setProductDetailsImageUrl] = useState<string>('');
	const [productThumbnailImageUrl, setProductThumbnailImageUrl] = useState<string>('');
	const [clear, selectedCategoryId, setSelectedCategoryId, breweryAddressDetail, breweryZonecode, breweryAddress] =
		useAddressStore((state) => [
			state.clear,
			state.selectedCategoryId,
			state.dispatchSelectedCategoryId,
			state.breweryAddressDetail,
			state.breweryZonecode,
			state.breweryAddress,
		]);

	const { handleSubmit, control, register, getValues, reset } = useForm<RegisterProductParams>({
		mode: 'onBlur',
		defaultValues: {
			productName: null,
			productDescription: null,
			productThumbnailImageUrl: '',
			productAlcoholDegree: 0,
			productCapacity: 0,
			breweryName: '',
			breweryZonecode: '',
			breweryAddress: '',
			manufacturer: '',
			productPrice: 0,
			registeredQuantity: 0,
			categoryId: null,
			rawMaterial: [],
			food: [],
			concept: [],
			taste: {
				sour: null,
				sweet: null,
				scent: null,
				carbonation: null,
				body: null,
			},
		},
	});

	const handleSelectedCategory = (value: any) => {
		setSelectedCategoryId(value);
	};

	const checkRegisterDisabled = () => {
		if (
			!productDetailsImageUrl ||
			!breweryAddress ||
			!breweryAddressDetail ||
			!breweryZonecode ||
			!selectedCategoryId ||
			!productThumbnailImageUrl
		)
			return 'disabled';
		return 'positive';
	};

	const onSubmit = handleSubmit(async (data: RegisterProductParams) => {
		const params = {
			...data,
			breweryAddress,
			breweryAddressDetails: breweryAddressDetail,
			breweryZonecode,
			productDetailsImageUrl,
			productThumbnailImageUrl,
			categoryId: selectedCategoryId,
		};
		await productApi.registerProduct(params).then((res) => {
			if (res.code === 200) {
				Toast(true, '상품이 등록되었어요.');
				navigate('/product/list');
				reset();
				clear();
			} else {
				Toast(false, '??');
			}
		});
	});

	return {
		selectedCategoryId,
		handleSelectedCategory,
		onSubmit,
		handleSubmit,
		control,
		register,
		form,
		checkRegisterDisabled,
		productDetailsImageUrl,
		setProductDetailsImageUrl,
		productThumbnailImageUrl,
		setProductThumbnailImageUrl,
	};
};
