import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { LiaWineBottleSolid } from "react-icons/lia";
import { Avatar, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const TopHeader = () => {
  const navigate = useNavigate();
  // TODO: LOGOUT
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <StyledTopHeader>
      <div>마덤보 주모님</div>
      <Dropdown
        menu={{
          items: [
            {
              key: "setMyShopInfo",
              label: (
                <button type="button" onClick={() => navigate("/edit/myshop")}>
                  <SettingOutlined />샵 정보 수정하기
                </button>
              ),
            },
            {
              key: "setMyPassword",
              label: (
                <button
                  type="button"
                  onClick={() => navigate("/edit/myPassword")}
                >
                  <SettingOutlined />
                  비밀번호 변경하기
                </button>
              ),
            },
            {
              key: "setLogout",
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
        <Avatar
          src="https://avatars.githubusercontent.com/u/79967044?v=4"
          size="large"
        />
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