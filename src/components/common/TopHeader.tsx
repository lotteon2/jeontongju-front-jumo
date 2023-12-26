import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMyInfoStore } from '../../stores/MyInfo/MyInfoStore';

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
									<SettingOutlined />
									비밀번호 변경하기
								</button>
							),
						},
						{
							key: 'setLogout',
							label: (
								<button type="button" onClick={handleLogout}>
									<LogoutOutlined />
									로그아웃
								</button>
							),
						},
					],
				}}
			>
				<Avatar src={storeImageUrl} size="large" />
			</Dropdown>
		</StyledTopHeader>
	);
};

export default TopHeader;

const StyledTopHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	margin: 0.5rem 0;
	right: 0;
	padding-right: 5rem;
	position: absolute;
	height: 5rem;
`;
