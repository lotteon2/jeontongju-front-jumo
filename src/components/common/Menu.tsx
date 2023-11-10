import { useState } from "react";
import type { MenuProps } from "antd";
import { Menu as AntdMenu } from "antd";
import { NavLink } from "react-router-dom";
import {
  DashboardOutlined,
  DatabaseOutlined,
  GiftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoneyCollectOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const Menu = () => {
  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const items: MenuItem[] = [
    // getItem(
    //   <div className="float-right">
    //     <ClearIcon onClick={handleClick} />
    //   </div>,
    //   "10"
    // ),
    getItem(
      <div className="flex align-center">
        <NavLink to="/dashboard">대시보드</NavLink>
      </div>,
      "1",
      <DashboardOutlined />,
    ),
    getItem("상품 관리", "2", <GiftOutlined />, [
      getItem(<NavLink to="/product/add">상품 등록</NavLink>, "3"),
      getItem(<NavLink to="/product/list">내 상품 조회</NavLink>, "4"),
    ]),
    getItem("정산/주문내역", "6", <MoneyCollectOutlined />, [
      getItem(<NavLink to="/cash/up">정산</NavLink>, "7"),
      getItem(<NavLink to="/cash/list">주문내역</NavLink>, "8"),
    ]),
    getItem("설빙고", "9", <DatabaseOutlined />, [
      getItem(<NavLink to="/sulbing/payfor">납입내역</NavLink>, "10"),
      getItem(<NavLink to="/sulbing/list">현황</NavLink>, "11"),
    ]),
    getItem("쇼츠/라이브", "12", <YoutubeOutlined />, [
      getItem(<NavLink to="/etc/shorts">쇼츠</NavLink>, "13"),
      getItem(<NavLink to="/etc/live">라이브커머스</NavLink>, "14"),
    ]),
  ];

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </button>
      <AntdMenu
        onClick={onClick}
        style={{ width: "20rem", zIndex: 10 }}
        selectedKeys={[current]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </>
  );
};
export default Menu;
