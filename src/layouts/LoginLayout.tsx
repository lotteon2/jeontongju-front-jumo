import styled from "@emotion/styled";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import wallPaper from "../assets/images/login_paper.png";

const LoginLayout = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  return (
    <StyledLoginLayout>
      <StyledLoginContainer
        state={navigation.state === "loading" ? "loading" : ""}
      >
        <StyledLogo onClick={() => navigate("/")}>
          <h1 className="main_logo">전통주.</h1>
          <div className="sub_logo">전통주, 마침표를 찍다.</div>
        </StyledLogo>
        <Outlet />
      </StyledLoginContainer>
    </StyledLoginLayout>
  );
};

export default LoginLayout;

const StyledLoginLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoginContainer = styled.div<{ state: string }>`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.state === "loading" ? "0%" : "100%")};
  background-image: url(${wallPaper});
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
