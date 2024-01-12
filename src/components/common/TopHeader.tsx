import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMyInfoStore } from '../../stores/MyInfo/MyInfoStore';
import Notification from './Notification';
import Logo from '../../assets/images/logo.png';

const TopHeader = () => {
	const navigate = useNavigate();
	const { clear } = useMyInfoStore();
	const [storeName, storeImageUrl] = useMyInfoStore((state) => [state.storeName, state.storeImageUrl]);
	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		clear();
		navigate('/init/login');
	};

	return (
		<StyledTopHeader>
			<div role="presentation" onClick={() => navigate('/')}>
				<img src={Logo} alt="logo" width="60px" height="60px" style={{ cursor: 'pointer' }} />
			</div>
			<StyledNotiContainer>
				<Notification />
				<div>{storeName} 주모님</div>
				<Dropdown
					menu={{
						items: [
							{
								key: 'setMyShopInfo',
								label: (
									<button type="button" onClick={() => navigate('/edit/myshop')}>
										<SettingOutlined /> 샵 정보 수정하기
									</button>
								),
							},
							{
								key: 'setMyPassword',
								label: (
									<button type="button" onClick={() => navigate('/edit/myPassword')}>
										<SettingOutlined /> 비밀번호 변경하기
									</button>
								),
							},
							{
								key: 'setLogout',
								label: (
									<button type="button" onClick={handleLogout}>
										<LogoutOutlined /> 로그아웃
									</button>
								),
							},
						],
					}}
				>
					<Avatar src={storeImageUrl} size="large" />
				</Dropdown>
			</StyledNotiContainer>
		</StyledTopHeader>
	);
};

export default TopHeader;

const StyledTopHeader = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 2rem;
	margin: 0.5rem 0;
	right: 0;
	padding: 0 5rem;
	position: absolute;
	height: 7rem;
	justify-content: space-between;
`;

const StyledNotiContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
