import React from "react";
import { Menu, Grid } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    // <Menu mode={md ? "horizontal" : "inline"}>
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="home">
        <a href="">Home</a>
      </Menu.Item>
      <SubMenu key="sub1" title={<span>About UWU</span>}>
        <Menu.Item key="history">History</Menu.Item>
        <Menu.Item key="vm">Vision and Mission</Menu.Item>
        <Menu.Item key="history">Master Plan</Menu.Item>
        <Menu.Item key="vm">Corporate Plan</Menu.Item>
        <Menu.Item key="history">Action Plan - 2019 (Amended)</Menu.Item>
        <Menu.Item key="vm">Vision and Mission</Menu.Item>
        {/* <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup> */}
      </SubMenu>

      <SubMenu key="sub2" title={<span>Administration</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <SubMenu key="sub3" title={<span>Faculties</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="services">
        <a href="">Services</a>
      </Menu.Item>
      <Menu.Item key="contactus">
        <a href="">Contact Us</a>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
