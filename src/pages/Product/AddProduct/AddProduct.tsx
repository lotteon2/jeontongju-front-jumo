import { Form, Input, Select, Rate, SelectProps } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { LiaWineBottleSolid } from 'react-icons/lia';
import { useRef } from 'react';
import styled from '@emotion/styled';
import { useAddProduct } from './AddProduct.hooks';
import Button from '../../../components/common/Button';
import DaumAddress from '../../../components/common/DaumAddress';
import { SnackOptions } from '../../../constants/ProductType/SnackType';
import { ConceptOptions } from '../../../constants/ProductType/ConceptType';
import { RawMaterialOptions } from '../../../constants/ProductType/MaterialType';
import { RegisterProductParams } from '../../../apis/product/productAPIService.types';
import { Toast } from '../../../components/common/Toast';
import { useMyInfoStore } from '../../../stores/MyInfo/MyInfoStore';
import ImageUploader from '../../../components/common/ImageUploader';
import LoadingImg from '../../../assets/images/loading.gif';

const AddProduct = () => {
	const {
		isLoadingUploadProduct,
		setProductDetailsImageUrl,
		productDetailsImageUrl,
		setProductThumbnailImageUrl,
		productThumbnailImageUrl,
		checkRegisterDisabled,
		form,
		selectedCategoryId,
		handleSelectedCategory,
		control,
		onSubmit,
		register,
	} = useAddProduct();
	const { category } = useMyInfoStore();
	const formRef = useRef();

	return isLoadingUploadProduct ? (
		<StyledLoadingContainer>
			<img src={LoadingImg} alt="loading" width="50%" />
		</StyledLoadingContainer>
	) : (
		<Form
			form={form}
			name="basic"
			ref={formRef}
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ width: '100%' }}
			onFinish={onSubmit}
			autoComplete="off"
		>
			<h2> 상품에 대한 설명을 입력해주세요. </h2>
			<Form.Item<RegisterProductParams>
				label="상품 이름"
				name="productName"
				required
				rules={[{ required: true, message: '상품 이름을 입력해주세요' }]}
			>
				<Controller
					name="productName"
					control={control}
					render={({ field }) => {
						return (
							<Input
								{...field}
								placeholder="고객들에게 보여질 상품 이름을 입력해주세요."
								style={{ width: '100%', margin: '1rem 0' }}
							/>
						);
					}}
				/>
			</Form.Item>
			<Form.Item<RegisterProductParams>
				label="상품 대표 이미지"
				name="productThumbnailImageUrl"
				rules={[{ required: true, message: '상품 대표 이미지를 입력해주세요.' }]}
			>
				<Controller
					name="productThumbnailImageUrl"
					control={control}
					render={({ field }) => {
						return <ImageUploader imageUrl={productThumbnailImageUrl} setImageUrl={setProductThumbnailImageUrl} />;
					}}
				/>
			</Form.Item>
			<Form.Item<RegisterProductParams>
				label="상품 상세 이미지"
				name="productDetailsImageUrl"
				rules={[{ required: true, message: '상품 상세 이미지를 입력해주세요.' }]}
			>
				<Controller
					name="productDetailsImageUrl"
					control={control}
					render={({ field }) => {
						return <ImageUploader imageUrl={productDetailsImageUrl} setImageUrl={setProductDetailsImageUrl} />;
					}}
				/>
			</Form.Item>
			<Form.Item<RegisterProductParams>
				label="상품 설명"
				name="productDescription"
				rules={[{ required: true, message: '상품 설명을 입력해주세요.' }]}
			>
				<Controller
					name="productDescription"
					control={control}
					render={({ field }) => {
						return (
							<Input
								{...field}
								ref={field.ref}
								placeholder="고객들에게 보여질 상품 설명을 입력해주세요."
								style={{ width: '100%', margin: '1rem 0' }}
							/>
						);
					}}
				/>
			</Form.Item>
			<Form.Item<RegisterProductParams>
				label="술의 종류"
				required
				rules={[
					{
						required: true,
						message: '술의 종류를 선택해주세요.',
					},
				]}
			>
				<Controller
					name="categoryId"
					control={control}
					render={({ field }) => {
						return (
							<Select
								size="middle"
								placeholder="술의 종류를 선택해주세요."
								style={{ width: '100%', margin: '1rem 0' }}
								value={selectedCategoryId ? category[Number(selectedCategoryId) - 1] : null}
								options={category}
								onChange={handleSelectedCategory}
							/>
						);
					}}
				/>
			</Form.Item>
			<Form.Item<RegisterProductParams>
				label="정확한 도수"
				name="productAlcoholDegree"
				rules={[{ required: true, message: '정확한 도수를 입력해주세요' }]}
			>
				<Controller
					name="productAlcoholDegree"
					control={control}
					render={({ field }) => {
						return (
							<Input
								ref={field.ref}
								{...field}
								type="number"
								placeholder="고객들에게 보여질 정확한 도수를 입력해주세요. (숫자만)"
							/>
						);
					}}
				/>
			</Form.Item>

			<Form.Item<RegisterProductParams>
				label="상품 용량(ml)"
				name="productCapacity"
				rules={[
					{
						required: true,
						message: '정확한 용량을 입력해주세요(ml)',
					},
				]}
			>
				<Controller
					name="productCapacity"
					control={control}
					render={({ field }) => {
						return (
							<Input
								ref={field.ref}
								{...field}
								type="number"
								placeholder="상품의 정확한 용량을 입력해주세요. (숫자만)"
							/>
						);
					}}
				/>
			</Form.Item>

			<Form.Item<RegisterProductParams>
				label="최초 등록 수량"
				name="registeredQuantity"
				rules={[{ required: true, message: '정확한 등록 수량을 입력해주세요' }]}
			>
				<Controller
					name="registeredQuantity"
					control={control}
					render={({ field }) => {
						return <Input ref={field.ref} {...field} type="number" placeholder="등록 수량을 입력해주세요. (숫자만)" />;
					}}
				/>
			</Form.Item>
			<Form.Item<RegisterProductParams>
				label="판매가격"
				name="productPrice"
				rules={[{ required: true, message: '판매 가격을 입력해주세요' }]}
			>
				<Controller
					name="productPrice"
					control={control}
					render={({ field }) => {
						return (
							<Input
								{...field}
								ref={field.ref}
								type="number"
								placeholder="고객들에게 보여질 정확한 판매가를 입력해주세요. (숫자만)"
							/>
						);
					}}
				/>
			</Form.Item>
			<Form.Item<RegisterProductParams>
				label="술의 원료"
				required
				rules={[
					{
						required: true,
						message: '술의 원료를 최대 2가지 골라주세요.',
					},
					{
						validator: (rule, value) => {
							if (value) {
								if (value.length > 2) {
									value.pop();
									form.resetFields(['rawMaterial']);
									form.setFieldsValue({
										rawMaterial: value,
									});
									Toast(false, '원료는 최대 2개까지 선택할 수 있어요.');
								}
							}
						},
					},
				]}
			>
				<Controller
					name="rawMaterial"
					control={control}
					render={({ field }) => {
						return (
							<Select
								{...field}
								ref={field.ref}
								mode="multiple"
								size="middle"
								placeholder="술의 원료를 최대 2가지 골라주세요."
								style={{ width: '100%', margin: '1rem 0' }}
								options={RawMaterialOptions}
							/>
						);
					}}
				/>
			</Form.Item>
			<br />
			<strong>상품의 맛을 선택해주세요</strong>
			<strong>(5점 만점, 1점:약함, 5점:강함)</strong>
			<Form.Item
				label="신맛"
				name="taste.sour"
				rules={[
					{
						required: true,
						message: '술의 신맛 강도를 선택해주세요.',
					},
				]}
			>
				<Controller
					name="taste.sour"
					control={control}
					render={({ field }) => {
						return <Rate ref={field.ref} {...field} character={<LiaWineBottleSolid />} />;
					}}
				/>
			</Form.Item>
			<Form.Item
				label="단맛"
				name="taste.sweet"
				rules={[
					{
						required: true,
						message: '술의 단맛 강도를 선택해주세요.',
					},
				]}
			>
				<Controller
					name="taste.sweet"
					control={control}
					render={({ field }) => {
						return <Rate ref={field.ref} {...field} character={<LiaWineBottleSolid />} />;
					}}
				/>
			</Form.Item>
			<Form.Item
				label="향"
				name="taste.scent"
				rules={[
					{
						required: true,
						message: '술의 향 강도를 선택해주세요.',
					},
				]}
			>
				<Controller
					name="taste.scent"
					control={control}
					render={({ field }) => {
						return <Rate ref={field.ref} {...field} character={<LiaWineBottleSolid />} />;
					}}
				/>
			</Form.Item>
			<Form.Item
				label="탄산감"
				name="taste.carbonation"
				rules={[
					{
						required: true,
						message: '술의 탄산 강도를 선택해주세요.',
					},
				]}
			>
				<Controller
					name="taste.carbonation"
					control={control}
					render={({ field }) => {
						return <Rate ref={field.ref} {...field} character={<LiaWineBottleSolid />} />;
					}}
				/>
			</Form.Item>
			<Form.Item
				label="바디감"
				name="taste.body"
				rules={[
					{
						required: true,
						message: '술의 바디감을 선택해주세요.',
					},
				]}
			>
				<Controller
					name="taste.body"
					control={control}
					render={({ field }) => {
						return <Rate ref={field.ref} {...field} character={<LiaWineBottleSolid />} />;
					}}
				/>
			</Form.Item>
			<br />
			<Form.Item<RegisterProductParams>
				label="제조사"
				name="manufacturer"
				rules={[{ required: true, message: '제조사 이름을 입력해주세요.' }]}
			>
				<Controller
					name="manufacturer"
					control={control}
					render={({ field }) => {
						return <Input {...field} ref={field.ref} placeholder="제조사 이름을 입력해주세요. " />;
					}}
				/>
			</Form.Item>
			<Form.Item<RegisterProductParams>
				label="양조장"
				name="breweryName"
				rules={[{ required: true, message: '양조장 이름을 입력해주세요.' }]}
			>
				<Controller
					name="breweryName"
					control={control}
					render={({ field }) => {
						return <Input {...field} ref={field.ref} placeholder="양조장 이름을 입력해주세요. " />;
					}}
				/>
			</Form.Item>
			<strong>양조장 위치를 입력해주세요.</strong>
			<DaumAddress />

			<br />
			<h2>고객들을 위해 상품에 대한 정보를 좀 더 알려주세요. (선택 안 해도 괜찮아요.)</h2>
			<strong>상품과 잘 어울리는 안주를 최대 2개 골라주세요.</strong>

			<Form.Item<RegisterProductParams>
				label="술과 잘 어울리는 안주"
				rules={[
					{ message: '술과 잘 어울리는 안주를 최대 2가지 골라주세요.' },
					{
						validator: (rule, value) => {
							if (value) {
								if (value.length > 2) {
									value.pop();
									form.resetFields(['food']);
									form.setFieldsValue({
										food: value,
									});
									Toast(false, '안주는 최대 2개까지 선택할 수 있어요.');
								}
							}
						},
					},
				]}
			>
				<Controller
					name="food"
					control={control}
					render={({ field }) => {
						return (
							<Select
								{...field}
								ref={field.ref}
								mode="multiple"
								size="middle"
								placeholder="술과 잘 어울리는 안주를 최대 2가지 골라주세요."
								style={{ width: '100%', margin: '1rem 0' }}
								options={SnackOptions}
							/>
						);
					}}
				/>
			</Form.Item>
			<strong>상품과 어울리는 컨셉을 최대 2가지 골라주세요.</strong>
			<Form.Item<RegisterProductParams>
				label="술과 잘 어울리는 컨셉"
				rules={[
					{ message: '술과 잘 어울리는 컨셉은 최대 2가지 골라주세요.' },
					{
						validator: (rule, value) => {
							if (value) {
								if (value.length > 2) {
									value.pop();
									form.resetFields(['concept']);
									form.setFieldsValue({
										food: value,
									});
									Toast(false, '컨셉은 최대 2개까지 선택할 수 있어요.');
								}
							}
						},
					},
				]}
			>
				<Controller
					name="concept"
					control={control}
					render={({ field }) => {
						return (
							<Select
								{...field}
								ref={field.ref}
								mode="multiple"
								size="middle"
								placeholder="술과 잘 어울리는 컨셉을 최대 2가지 골라주세요."
								style={{ width: '100%', margin: '1rem 0' }}
								options={ConceptOptions}
							/>
						);
					}}
				/>
			</Form.Item>
			<Button
				btntype={checkRegisterDisabled()}
				content="상품 등록하기"
				Key="addProduct"
				isfull
				handleClick={onSubmit}
				htmlType="submit"
				loading={isLoadingUploadProduct}
				disabled={checkRegisterDisabled() === 'disabled'}
			/>
		</Form>
	);
};
export default AddProduct;

const StyledLoadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
