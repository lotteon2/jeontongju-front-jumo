import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import TopHeader from "../components/common/TopHeader";
import Menu from "../components/common/Menu";

const MainLayout = () => {
  return (
    <StyledMainLayout>
      <Menu />
      <StyledMainContentLayout>
        <TopHeader />
        <StyledOutletContainer>
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

const StyledOutletContainer = styled.div`
  margin-top: 7rem;
`;
