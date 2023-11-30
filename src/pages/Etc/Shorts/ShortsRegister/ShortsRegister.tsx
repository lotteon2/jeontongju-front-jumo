import { Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { RegisterShortParams } from '../../../../apis/product/productAPIService.types';
import Button from '../../../../components/common/Button';

const ShortsRegister = () => {
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

	const onSubmit = handleSubmit((data: RegisterShortParams) => {
		console.log(data);
	});

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
				<Form.Item<RegisterShortParams>
					label="연관 상품"
					name="productId"
					rules={[
						{
							required: true,
							message: '연관된 상품이 있다면 선택해주세요.',
						},
					]}
				>
					<Controller
						name="productId"
						control={control}
						render={({ field }) => (
							<Input {...field} placeholder="고객들에게 보여질 상품의 정확한 용량(ml)를 입력해주세요." />
						)}
					/>
				</Form.Item>
				{/* <Form.Item<RegisterShortParams>
					label="최소 가격"
					name="startingPrice"
					rules={[{ required: true, message: '경매 시작가를 입력해주세요' }]}
				>
					<Controller
						name="startingPrice"
						control={control}
						render={({ field }) => <Input {...field} placeholder="경매 시작가를 입력해주세요." />}
					/>
				</Form.Item> */}
				<Button content="쇼츠 등록하기" Key="registerShorts" isfull handleClick={onSubmit} htmlType="submit" />
			</Form>
		</div>
	);
};
export default ShortsRegister;
