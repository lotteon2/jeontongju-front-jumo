import { Input, Form, Radio } from 'antd';
import styled from '@emotion/styled';
import { useSignUp } from './SignUp.hooks';
import { SignUpFieldType } from '../../constants/SignUpFieldType';
import Button from '../../components/common/Button';
import AdultValid from '../../assets/images/adultValid.png';
import ImageUploader from '../../components/common/ImageUploader';

const SignUp = () => {
	const {
		isValidEmail,
		handleCheckEmail,
		email,
		setEmail,
		emailCode,
		setEmailCode,
		password,
		setPassword,
		checkPassword,
		setCheckPassword,
		storeName,
		setStoreName,
		storeDescription,
		setStoreDescription,
		storePhoneNumber,
		setStorePhoneNumber,
		onFinish,
		isValidEmailCode,
		handleCheckEmailCode,
		handleAdultValid,
		checkRegisterDisabled,
		isAbleToSendEmail,
		storeImageUrl,
		setStoreImageUrl,
	} = useSignUp();

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600, width: '100%', display: 'flex', flexDirection: 'column' }}
			onFinish={onFinish}
			autoComplete="off"
		>
			<Form.Item<SignUpFieldType>
				label="이메일"
				name="email"
				rules={[{ required: true, message: '이메일을 입력해주세요' }]}
			>
				<StyledInputBtn>
					<Input
						placeholder="로그인에 사용할 이메일을 입력해주세요."
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={isValidEmailCode}
					/>
					<Button
						content="인증"
						Key="loginAdmin"
						handleClick={handleCheckEmail}
						htmlType="button"
						btntype={isAbleToSendEmail()}
					/>
				</StyledInputBtn>
			</Form.Item>
			{isValidEmail && (
				<>
					<StyledMessage>이메일로 유효 코드가 발송되었어요. 확인해주세요.</StyledMessage>
					<Form.Item<SignUpFieldType>
						label="이메일 유효코드"
						name="emailCode"
						rules={[{ required: true, message: '유효코드를 입력해주세요' }]}
					>
						<StyledInputBtn>
							<Input
								placeholder="이메일로 전송된 유효 코드를 입력해주세요."
								value={emailCode}
								onChange={(e) => setEmailCode(e.target.value)}
								disabled={isValidEmailCode}
							/>
							<Button
								content="확인"
								Key="checkEmailCode"
								handleClick={handleCheckEmailCode}
								htmlType="button"
								disabled={isValidEmailCode}
							/>
						</StyledInputBtn>
					</Form.Item>
				</>
			)}
			{emailCode.length > 0 && isValidEmailCode && <StyledMessage>이메일 인증이 완료되었어요.</StyledMessage>}
			{emailCode.length > 0 && !isValidEmailCode && <StyledMessage>유효코드가 일치하지 않아요.</StyledMessage>}

			<Form.Item<SignUpFieldType>
				label="비밀번호"
				name="password"
				rules={[
					{
						required: true,
						message: '비밀번호를 입력해주세요',
						min: 8,
						max: 16,
						pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
					},
				]}
			>
				<Input.Password
					placeholder="영문, 숫자, 특수문자를 모두 포함하여 8자이상 16자 이내로 입력해주세요."
					value={password as string}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Item>
			<Form.Item<SignUpFieldType>
				label="비밀번호 확인"
				name="checkPassword"
				rules={[
					{
						required: true,
						message: '비밀번호를 다시 한 번 입력해주세요.',
						min: 8,
						max: 16,
						pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
					},
				]}
			>
				<Input.Password
					placeholder="비밀번호를 다시 한 번 입력해주세요."
					value={checkPassword as string}
					onChange={(e) => setCheckPassword(e.target.value)}
				/>
			</Form.Item>
			{password !== checkPassword && <StyledMessage>비밀번호가 일치하지 않아요.</StyledMessage>}
			<Form.Item<SignUpFieldType>
				label="주모 이름"
				name="storeName"
				rules={[{ required: true, message: '주모 이름을 입력해주세요.' }]}
			>
				<Input
					placeholder="고객들에게 보여질 주모 이름을 입력해주세요."
					value={storeName}
					onChange={(e) => setStoreName(e.target.value)}
				/>
			</Form.Item>
			<Form.Item<SignUpFieldType>
				label="주모 소개"
				name="storeDescription"
				rules={[{ required: true, message: '주모소개를 입력해주세요.' }]}
			>
				<Input
					placeholder="고객들에게 보여질 주모 소개를 입력해주세요."
					value={storeDescription as string}
					onChange={(e) => setStoreDescription(e.target.value)}
				/>
			</Form.Item>
			<Form.Item<SignUpFieldType>
				label="주모 대표 번호"
				name="storePhoneNumber"
				rules={[{ required: true, message: '주모 대표번호를 입력해주세요.' }]}
			>
				<Input
					value={password as string}
					placeholder="고객이 문의할 대표 번호를 입력해주세요.(숫자만)"
					onChange={(e) => setStorePhoneNumber(e.target.value)}
				/>
			</Form.Item>
			<Form.Item<SignUpFieldType>
				label="주모 대표 이미지"
				name="storeImageUrl"
				rules={[{ required: true, message: '주모 이미지를 입력해주세요.' }]}
			>
				<ImageUploader imageUrl={storeImageUrl} setImageUrl={setStoreImageUrl} />
			</Form.Item>
			<StyledAdultValidContainer onClick={handleAdultValid} />
			<Button
				content="주모 가입 신청하기"
				Key="registerAdmin"
				isfull
				handleClick={onFinish}
				btntype={checkRegisterDisabled()}
				htmlType="submit"
			/>
		</Form>
	);
};
export default SignUp;

const StyledInputBtn = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledMessage = styled.div`
	color: var(--primary-bronze);
	margin-top: -1rem;
	margin-bottom: 1rem;
`;

const StyledAdultValidContainer = styled.div`
	width: 100%;
	height: 20rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: url(${AdultValid});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 100% 100%;
	cursor: pointer;
	margin-bottom: 1rem;
`;
