import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Menu from '../components/common/Menu';

const MainLayout = () => {
	return (
		<StyledMainLayout>
			<Menu />
			<StyledMainContentLayout>
				<div>HEADER 자리</div>
				<Outlet />
			</StyledMainContentLayout>
		</StyledMainLayout>
	);
};
export default MainLayout;

const StyledMainLayout = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
`;

const StyledMainContentLayout = styled.div`
	width: 100%;
	padding-left: 3rem;
	display: flex;
	flex-direction: column;
`;
