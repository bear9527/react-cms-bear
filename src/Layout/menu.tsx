
import { AppstoreOutlined, MailOutlined, SettingOutlined, } from '@ant-design/icons';
import { MenuProps } from 'antd';
type MenuItem = Required<any>['items'][number];

export const items: MenuItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: <MailOutlined />,
  },
  {
    key: 'system',
    label: '系统管理',
    path: "system",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'menu',
        path: "menu", label: '菜单管理'
      },
      {
        key: 'articles',
        path: "articles", label: '文章管理'
      },
      {
        key: 'user',
        path: "user", label: '用户管理'
      },
    ],
  },
  {
    type: 'divider',
  },
];
