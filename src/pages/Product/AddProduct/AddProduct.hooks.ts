import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddressStore } from '../../../stores/Address/AddressStore';
import { RegisterProductParams } from '../../../apis/product/productAPIService.types';
import { productApi } from '../../../apis/product/productAPIService';
import { Toast } from '../../../components/common/Toast';

export const useAddProduct = () => {
	const [clear, selectedCategoryId, setSelectedCategoryId, breweryAddressDetail, breweryZonecode, breweryAddress] =
		useAddressStore((state) => [
			state.clear,
			state.selectedCategoryId,
			state.dispatchSelectedCategoryId,
			state.breweryAddressDetail,
			state.breweryZonecode,
			state.breweryAddress,
		]);

	const { handleSubmit, control } = useForm<RegisterProductParams>({
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
			productDetailsImageUrl: '',
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
		console.log(value);
	};

	const onSubmit = handleSubmit(async (data: RegisterProductParams) => {
		const params = { ...data, breweryAddress, breweryAddressDetail, breweryZonecode };
		await productApi.registerProduct(params).then((res) => {
			if (res.code === 200) {
				Toast(true, '상품이 등록되었어요.');
				clear();
			} else {
				Toast(false, '??');
			}
		});
		console.log({ ...data, breweryAddress, breweryAddressDetail, breweryZonecode });
	});

	return {
		selectedCategoryId,
		handleSelectedCategory,
		onSubmit,
		handleSubmit,
		control,
	};
};
