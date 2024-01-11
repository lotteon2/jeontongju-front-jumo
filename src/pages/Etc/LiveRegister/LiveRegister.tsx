import { useForm, Controller } from 'react-hook-form';
import { Form, Input } from 'antd';
import styled from '@emotion/styled';
import { LiveRegisterFieldType } from '../../../constants/LiveRegisterFieldType';
import Button from '../../../components/common/Button';
import { useLiveRegister } from './LiveRegister.hooks';
import ImageUploader from '../../../components/common/ImageUploader';

const LiveRegister = () => {
	const { form, control, onSubmit, title, disabled, imageUrl, setImageUrl } = useLiveRegister();

	return (
		<StyledLiveRegisterPage>
			<h2>{title}</h2>
			<Form
				form={form}
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ width: '100%' }}
				onFinish={onSubmit}
				autoComplete="off"
			>
				<Form.Item<LiveRegisterFieldType>
					label="상품 이름"
					name="auctionProductName"
					rules={[{ required: true, message: '상품 이름을 입력해주세요' }]}
				>
					<Controller
						name="auctionProductName"
						control={control}
						render={({ field }) => <Input {...field} placeholder="고객들에게 보여질 경매 상품 이름을 입력해주세요." />}
					/>
				</Form.Item>
				<Form.Item<LiveRegisterFieldType>
					label="경매 상품 썸네일"
					name="thumbnailImageUrl"
					rules={[{ required: true, message: '경매 상품 썸네일을 업로드해주세요' }]}
				>
					<ImageUploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
				</Form.Item>
				<Form.Item<LiveRegisterFieldType>
					label="상품 설명"
					name="description"
					rules={[{ required: true, message: '상품 설명을 입력해주세요' }]}
				>
					<Controller
						name="description"
						control={control}
						render={({ field }) => <Input {...field} placeholder="고객들에게 보여질 경매 상품 설명을 입력해주세요." />}
					/>
				</Form.Item>
				<Form.Item<LiveRegisterFieldType>
					label="정확한 도수"
					name="alcoholDegree"
					rules={[{ required: true, message: '상품의 정확한 도수를 입력해주세요' }]}
				>
					<Controller
						name="alcoholDegree"
						control={control}
						render={({ field }) => <Input {...field} placeholder="고객들에게 보여질 상품의 도수를 입력해주세요." />}
					/>
				</Form.Item>
				<Form.Item<LiveRegisterFieldType>
					label="용량"
					name="capacity"
					rules={[
						{
							required: true,
							message: '상품의 정확한 용량(ml)를 입력해주세요',
						},
					]}
				>
					<Controller
						name="capacity"
						control={control}
						render={({ field }) => (
							<Input {...field} placeholder="고객들에게 보여질 상품의 정확한 용량(ml)를 입력해주세요." />
						)}
					/>
				</Form.Item>
				<Form.Item<LiveRegisterFieldType>
					label="최소 가격"
					name="startingPrice"
					rules={[{ required: true, message: '경매 시작가를 입력해주세요' }]}
				>
					<Controller
						name="startingPrice"
						control={control}
						render={({ field }) => <Input {...field} placeholder="경매 시작가를 입력해주세요." />}
					/>
				</Form.Item>
				<Button
					content="경매 신청하기"
					Key="registerLive"
					isfull
					handleClick={onSubmit}
					htmlType="submit"
					disabled={disabled}
				/>
			</Form>
		</StyledLiveRegisterPage>
	);
};
export default LiveRegister;

const StyledLiveRegisterPage = styled.div``;
