import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import TopHeader from '../components/common/TopHeader';
import Menu from '../components/common/Menu';
import { useMyInfoStore } from '../stores/MyInfo/MyInfoStore';
import Login from '../pages/Login/Login';
import LoginLayout from './LoginLayout';
import { useGetMyInfoQuery } from '../queries/useGetMyInfoQuery';

const MainLayout = () => {
  const navigate = useNavigation();
  const [
    isLogin,
    isApproved,
    setIsApproved,
    setStoreImageUrl,
    setStoreName,
    setCategory,
  ] = useMyInfoStore((state) => [
    state.isLogin,
    state.isApproved,
    state.dispatchIsApproved,
    state.dispatchStoreImageUrl,
    state.dispatchStoreName,
    state.dispatchCategory,
  ]);

  const { data: myInfo } = useGetMyInfoQuery();

  useEffect(() => {
    if (isLogin) {
      if (myInfo.data !== undefined) {
        setIsApproved(myInfo.data.approvalState);
        setStoreImageUrl(myInfo.data.storeImageUrl);
        setStoreName(myInfo.data.storeName);
        setCategory(myInfo.data.category);
      }
    }
  }, [myInfo]);

  return (
    <StyledMainLayout>
      <Menu />
      <StyledMainContentLayout>
        <TopHeader />
        <StyledOutletContainer
          state={navigate.state === 'loading' ? 'loading' : ''}
        >
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
