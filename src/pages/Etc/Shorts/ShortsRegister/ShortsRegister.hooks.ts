import { useForm } from 'react-hook-form';
import { Form } from 'antd';
import { RegisterShortParams } from '../../../../apis/product/productAPIService.types';
import { useMyInfoStore } from '../../../../stores/MyInfo/MyInfoStore';
import { useAddShortsStore } from '../../../../stores/Product/AddShorts/AddShortsStore';

export const useShortsRegister = () => {
	const [selectedProductId, setSelectedProductId] = useAddShortsStore((state) => [
		state.selectedProductId,
		state.dispatchSelectProductId,
	]);
	const products = useMyInfoStore((state) => state.products);
	const [form] = Form.useForm();

	const { register, handleSubmit, control } = useForm<RegisterShortParams>({
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

	// TODO  : image, video 추가
	const onSubmit = handleSubmit((data: RegisterShortParams) => {
		console.log(data);
		console.log(selectedProductId);
	});

	return {
		handleSelectedProduct,
		products,
		handleSubmit,
		onSubmit,
		control,
		form,
	};
};
