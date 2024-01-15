import styled from '@emotion/styled';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import wallPaper from '../assets/images/login_paper.png';
import { useMyInfoStore } from '../stores/MyInfo/MyInfoStore';
import Logo from '../assets/images/logo.png';

export default function LoginLayout() {
	const navigate = useNavigate();
	const [isLogin, approvalState] = useMyInfoStore((state) => [state.isLogin, state.approvalState]);

	useEffect(() => {
		if (isLogin && approvalState === 'ALLOW') navigate('/');
	});

	return (
		<StyledLoginLayout>
			<StyledLoginContainer>
				<div role="presentation" onClick={() => navigate('/')}>
					<img src={Logo} alt="logo" width="100px" height="100px" style={{ cursor: 'pointer', marginBottom: '10px' }} />
				</div>
				{/* <StyledLogo onClick={() => navigate('/')}>
					<h1 className="main_logo">전통주.</h1>
					<div className="sub_logo">전통주, 마침표를 찍다.</div>
				</StyledLogo> */}
				<Outlet />
			</StyledLoginContainer>
		</StyledLoginLayout>
	);
}

const StyledLoginLayout = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 0 25vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledLoginContainer = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 100% 100%;
`;

const StyledLogo = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 3rem;
	gap: 2rem;
	.main_logo {
		font-weight: 700;
	}

	@media (max-width: 576px) {
		flex-direction: column;
	}
`;
