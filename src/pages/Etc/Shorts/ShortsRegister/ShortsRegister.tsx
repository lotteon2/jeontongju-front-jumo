import { Form, Input, Select } from 'antd';
import { Controller } from 'react-hook-form';
import { RegisterShortParams } from '../../../../apis/product/productAPIService.types';
import Button from '../../../../components/common/Button';
import { useAddShortsStore } from '../../../../stores/Product/AddShorts/AddShortsStore';
import { useShortsRegister } from './ShortsRegister.hooks';

const ShortsRegister = () => {
	const [selectedProductId] = useAddShortsStore((state) => [state.selectedProductId]);
	const { handleSelectedProduct, products, onSubmit, control, form, disabled } = useShortsRegister();
	// const [form] = Form.useForm();

	// const { register, handleSubmit, control } = useForm<RegisterShortParams>({
	// 	mode: 'onBlur',
	// 	defaultValues: {
	// 		shortsTitle: null,
	// 		shortsDescription: null,
	// 		shortsVideoUrl: null,
	// 		shortsThumbnailImageUrl: null,
	// 		productId: null,
	// 		isActivate: true,
	// 	},
	// });

	// const onSubmit = handleSubmit((data: RegisterShortParams) => {
	// 	console.log(data);
	// });

	return (
		<div>
			<h1>쇼츠를 등록해주세요.</h1>
			<Form
				form={form}
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ width: '100%' }}
				onFinish={onSubmit}
				autoComplete="off"
			>
				<Form.Item<RegisterShortParams>
					label="쇼츠 이름"
					name="shortsTitle"
					rules={[{ required: true, message: '쇼츠 이름을 입력해주세요' }]}
				>
					<Controller
						name="shortsTitle"
						control={control}
						render={({ field }) => <Input {...field} placeholder="고객들에게 보여질 쇼츠 이름을 입력해주세요." />}
					/>
				</Form.Item>
				<Form.Item<RegisterShortParams>
					label="쇼츠 설명"
					name="shortsDescription"
					rules={[{ required: true, message: '쇼츠 설명을 입력해주세요' }]}
				>
					<Controller
						name="shortsDescription"
						control={control}
						render={({ field }) => <Input {...field} placeholder="고객들에게 보여질 쇼츠 설명을 입력해주세요." />}
					/>
				</Form.Item>
				<Form.Item<RegisterShortParams>
					label="정확한 도수"
					name="shortsVideoUrl"
					rules={[{ required: true, message: '쇼츠를 업로드해주세요' }]}
				>
					<Controller
						name="shortsVideoUrl"
						control={control}
						render={({ field }) => <Input {...field} placeholder="고객들에게 보여질 쇼츠를 입력해주세요." />}
					/>
				</Form.Item>
				<h3>상품에 대한 쇼츠라면 아래에서 해당 상품을 선택해주세요.</h3>
				<h3>상품을 선택하지 않는다면 주모와 연관된 쇼츠로 보여지게 돼요!</h3>
				<Form.Item<RegisterShortParams> label="연관 상품" name="productId">
					<Select
						size="middle"
						placeholder="연관된 상품을 선택해주세요."
						style={{ width: '100%', margin: '1rem 0' }}
						value={products ? products[Number(selectedProductId) - 1] : null}
						options={products}
						onChange={handleSelectedProduct}
					/>
				</Form.Item>
				<Button
					content="쇼츠 등록하기"
					Key="registerShorts"
					isfull
					handleClick={onSubmit}
					htmlType="submit"
					disabled={disabled}
				/>
			</Form>
		</div>
	);
};
export default ShortsRegister;
