import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import TopHeader from '../components/common/TopHeader';
import Menu from '../components/common/Menu';
import { useMyInfoStore } from '../stores/MyInfo/MyInfoStore';
import { useGetMyInfoQuery } from '../queries/useGetMyInfoQuery';
import { useGetMyProductQuery } from '../queries/useGetMyProductQuery';
import { sellerApi } from '../apis/seller/sellerAPIService';

const MainLayout = () => {
	const navigate = useNavigation();
	const [
		isLogin,
		approvalState,
		setStoreDescription,
		setStorePhoneNumber,
		setApprovalState,
		setStoreImageUrl,
		setStoreName,
		setCategory,
		setProducts,
	] = useMyInfoStore((state) => [
		state.isLogin,
		state.approvalState,
		state.dispatchStoreDescription,
		state.dispatchStorePhoneNumber,
		state.dispatchApprovalState,
		state.dispatchStoreImageUrl,
		state.dispatchStoreName,
		state.dispatchCategory,
		state.dispatchProducts,
	]);

	const { data: myInfo } = useGetMyInfoQuery();
	const { data: myProduct } = useGetMyProductQuery();

	const getMyShopInfo = async () => {
		try {
			const data = await sellerApi.getSellerInfoForEdit();
			if (data.code === 200) {
				setStorePhoneNumber(data.data.storePhoneNumber);
				setStoreDescription(data.data.storeDescription);
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getMyShopInfo();
	}, []);
	useEffect(() => {
		if (isLogin) {
			if (!myInfo) return;
			if (myInfo.data) {
				setApprovalState(myInfo.data.approvalState);
				setStoreImageUrl(myInfo.data.storeImageUrl);
				setStoreName(myInfo.data.storeName);
				setCategory(myInfo.data.category);
			}
		}
	}, [myInfo]);

	useEffect(() => {
		if (myProduct) {
			setProducts(myProduct.data);
		}
	}, [myProduct]);

	return (
		<StyledMainLayout>
			<Menu />
			<StyledMainContentLayout>
				<TopHeader />
				<StyledOutletContainer state={navigate.state === 'loading' ? 'loading' : ''}>
					<Outlet />
				</StyledOutletContainer>
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
	position: relative;
	width: 100%;
	padding: 0 5rem;
	display: flex;
	flex-direction: column;
`;

const StyledOutletContainer = styled.div<{ state: string }>`
	margin-top: 7rem;
	background-color: ${(props) => (props.state === 'loading' ? 'var(--primary-silver)' : 'none')};
`;
