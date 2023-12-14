import { Form, Input } from 'antd';
import styled from '@emotion/styled';
import { useFindMyPassword } from './FindMyPassword.hooks';
import { LoginFieldType } from '../../constants/LoginFieldType';
import Button from '../../components/common/Button';

const FindMyPassword = () => {
	const {
		email,
		setEmail,
		onSubmitEmail,
		authCode,
		inputAuthCode,
		setInputAuthCode,
		authUser,
		onSubmitAuthCode,
		newPassword,
		setNewPassword,
		onSubmitNewPassword,
		isAbleToCheckEmail,
	} = useFindMyPassword();

	return (
		<StyledFindContainer>
			<span>회원가입 당시 사용했던 이메일을 입력해주세요.</span>
			<Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} autoComplete="off">
				<Form.Item<LoginFieldType>
					label="이메일"
					name="email"
					rules={[{ required: true, message: '이메일을 입력해주세요.' }]}
				>
					<Input value={email} onChange={(e) => setEmail(e.target.value)} disabled={authCode !== null} />
				</Form.Item>
				<Button
					content="이메일 발송"
					Key="findMyPassword"
					isfull
					handleClick={onSubmitEmail}
					htmlType="button"
					btntype={isAbleToCheckEmail()}
				/>
			</Form>
			{authCode && (
				<>
					<span>이메일로 새로 생성된 비밀번호를 발송했어요.</span>
					<Form.Item
						label="유효코드"
						name="inputAuthCode"
						rules={[{ required: true, message: '유효코드를 입력해주세요.' }]}
					>
						<Input value={inputAuthCode} onChange={(e) => setInputAuthCode(e.target.value)} />
					</Form.Item>
					<Button
						content="유효코드 확인"
						Key="inputAuthCode"
						isfull
						handleClick={onSubmitAuthCode}
						htmlType="button"
						disabled={authUser !== false && authCode !== null}
					/>
				</>
			)}
			{authCode && authUser && (
				<>
					<span>새로운 비밀번호를 입력해주세요.</span>
					<Form.Item
						label="새로운 비밀번호"
						name="newPassword"
						rules={[{ required: true, message: '유효코드를 입력해주세요.' }]}
					>
						<Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
					</Form.Item>
					<Button
						content="비밀번호 제출"
						Key="updateNewPassword"
						isfull
						handleClick={onSubmitNewPassword}
						htmlType="button"
					/>
				</>
			)}
		</StyledFindContainer>
	);
};
export default FindMyPassword;

const StyledFindContainer = styled.div`
	display: flex;
	gap: 2rem;
	flex-direction: column;
`;
