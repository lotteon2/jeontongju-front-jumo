import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AddProductFieldType } from '../../../constants/AddProductFieldType';

export const useAddProduct = () => {
	const { handleSubmit, control } = useForm<AddProductFieldType>({
		mode: 'onBlur',
	});
	const onSubmit = handleSubmit((data: AddProductFieldType) => {
		console.log(data);
	});

	const onFinish = async () => {
		// console.log('name', name);
		// console.log('email', email);
		// console.log('password', password);
	};

	return {
		onSubmit,
		onFinish,
	};
};
