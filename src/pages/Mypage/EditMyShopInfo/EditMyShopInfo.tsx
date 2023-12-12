import { Form, Input } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import styled from '@emotion/styled';
import { EditMyShopInfoFieldType } from '../../../constants/EditMyShopInfoFieldType';
import Button from '../../../components/common/Button';
import { useEditMyShopInfo } from './EditMyShopInfo.hooks';
import { useMyInfoStore } from '../../../stores/MyInfo/MyInfoStore';
import ImageUploader from '../../../components/common/ImageUploader';

const EditMyShopInfo = () => {
	const { form, register, control, handleWithdraw, onSubmit, isAbleToEdit, imageUrl, handleChangeImageUrl } =
		useEditMyShopInfo();

	const [storeName, storeImageUrl, storeDescription, storePhoneNumber] = useMyInfoStore((state) => [
		state.storeName,
		state.storeImageUrl,
		state.storeDescription,
		state.storePhoneNumber,
	]);

	return (
		<StyledEditMyShopInfoPage>
			<Form
				form={form}
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}
				onFinish={onSubmit}
				autoComplete="off"
			>
				<ImageUploader imageUrl={imageUrl} setImageUrl={handleChangeImageUrl} />
				<Form.Item<EditMyShopInfoFieldType>
					label="주모 이름"
					name="storeName"
					rules={[{ required: true, message: '주모 이름을 입력해주세요' }]}
				>
					<Controller
						name="storeName"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								{...register('storeName')}
								defaultValue={storeName}
								placeholder="고객들에게 보여질 주모 이름을 입력해주세요."
							/>
						)}
					/>
				</Form.Item>
				<Form.Item<EditMyShopInfoFieldType>
					label="주모 짧은 소개"
					name="storeDescription"
					rules={[{ required: true, message: '주모 소개를 입력해주세요' }]}
				>
					<Controller
						name="storeDescription"
						control={control}
						render={({ field }) => (
							<Input
								{...register('storeDescription')}
								{...field}
								defaultValue={storeDescription}
								placeholder="고객들에게 보여질 주모 소개를 입력해주세요."
							/>
						)}
					/>
				</Form.Item>
				<Form.Item<EditMyShopInfoFieldType>
					label="주모 대표 번호"
					name="storePhoneNumber"
					rules={[{ required: true, message: '주모 대표 번호를 입력해주세요' }]}
				>
					<Controller
						name="storePhoneNumber"
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								{...register('storePhoneNumber')}
								defaultValue={storePhoneNumber}
								placeholder="고객들에게 보여질 대표 번호를 입력해주세요."
							/>
						)}
					/>
				</Form.Item>
			</Form>
			<StyledBtnBottom>
				<Button
					content="수정하기"
					width="10rem"
					Key="editMyShopInfo"
					btntype={isAbleToEdit()}
					handleClick={onSubmit}
					htmlType="submit"
				/>
				<Button
					content="탈퇴하기"
					width="10rem"
					Key="withdrawMyShop"
					handleClick={handleWithdraw}
					btntype="cancel"
					htmlType="submit"
				/>
			</StyledBtnBottom>
		</StyledEditMyShopInfoPage>
	);
};
export default EditMyShopInfo;

const StyledEditMyShopInfoPage = styled.div`
	margin: 0 auto;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledBtnBottom = styled.div`
	display: flex;
	gap: 1rem;
	flex-direction: row-reverse;
`;
