import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Menu from '../components/common/Menu';

const MainLayout = () => {
	return (
		<StyledMainLayout>
			<Menu />
			<Outlet />
		</StyledMainLayout>
	);
};
export default MainLayout;

const StyledMainLayout = styled.div`
	width: 100vw;
	height: 100vh;
`;
