import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AddProductFieldType } from '../../../constants/AddProductFieldType';

export const useAddProduct = () => {
	const { handleSubmit, control } = useForm<AddProductFieldType>({
		mode: 'onBlur',
	});

	const [foods, setFoods] = useState<string[]>([]);

	const onSubmit = handleSubmit((data: AddProductFieldType) => {
		console.log(data);
	});

	const handleChangeConcept = (value: string[]) => {
		console.log(value);
	};

	const handleChangeMaterial = (value: string) => {
		console.log('here');
		console.log(`Selected: ${value}`);
		console.log(value.split(','));
	};

	const handleChangeFood = (value: string) => {
		console.log(value);
		// const currentValue = value.split(',');
		// console.log(currentValue);
		if (foods.length > 2) foods.pop();
		else {
			// const newFoods = [...foods]
			setFoods([...foods, value]);
		}
		console.log(typeof value);
		// console.log(value.length);
		// if (value.length >= 2) {
		// 	value.pop();
		// }
		// console.log('here');
		console.log(`Selected: ${value}`);
	};

	const onFinish = async () => {
		// console.log('name', name);
		// console.log('email', email);
		// console.log('password', password);
	};

	return {
		onSubmit,
		onFinish,
		handleChangeConcept,
		handleChangeMaterial,
		handleChangeFood,
		foods,
	};
};
