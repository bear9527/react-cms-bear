import React, { Suspense, useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { items, menuFn } from "./menu";
import { Outlet, useNavigate } from 'react-router-dom';
import BreadcrumbBox from "./Breadcrumb";
// import { hashHistory } from 'react-router'
import { useLocation } from "react-router-dom";
import { getArrPathToKeys } from "../utils"
import { getUserInfo } from "../api/user";
import { useDispatch, useSelector } from "react-redux";
import { setMyInfo } from "../store/modules/userStore";
const { Header, Sider, Content } = Layout;
const LayoutApp: React.FC = () => {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState(['home']);
  const [openKeys, setOpenKeys] = useState(['']);
  const { userInfo } = useSelector((state: any) => state.userStore);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const [userInfo, setUserInfo] = useState({});

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  useEffect(() => {


    getUserInfo().then((res) => {
      dispatch(setMyInfo(res as any))
    });
  }, [])
  useEffect(() => {
    setActiveKey(['system', location.pathname.slice(1)])

    setOpenKeys([...getArrPathToKeys(items) as any])
    // setOpenKeys([location.pathname.slice(1)])



  }, [location.pathname]);
  const onClick: MenuProps['onClick'] = (e: any) => {
    console.log('click ', e.item.props.path);
    setActiveKey([...e.key])
    navigate(`${e.item.props.path || e.key }`)
    // document.location.href = "/login"
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[...activeKey]}
          // openKeys={[...openKeys]}
          items={menuFn()}
          onClick={onClick}
        />
      </Sider>
      <Layout>
        <Header className='mb-4' style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          >
          </Button>
          <div className='float-right	pr-4'>
            {userInfo?.username}
          </div>
        </Header>
        <BreadcrumbBox></BreadcrumbBox>
        <Content
          className='overflow-auto'
          style={{
            margin: '0 16px 0 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;