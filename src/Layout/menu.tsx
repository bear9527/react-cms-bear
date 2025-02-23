
import { AppstoreOutlined, MailOutlined, ReadOutlined, } from '@ant-design/icons';
import { MenuProps } from 'antd';
type MenuItem = Required<any>['items'][number];

export const items: MenuItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: <MailOutlined />,
  },
  {
    key: 'content',
    label: '内容管理',
    icon: <ReadOutlined />,
    children: [
      // ...contentArr
    ],
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

export const menuFn = (): MenuItem[]=>{

  const contentArr1 = [{
    key: 'contents1',
    path: "contents/1", 
    label: '内容一'
  }, {
    key: 'contents2',
    path: "contents/2", 
    label: '内容2'
  }]
  return [
    {
      key: 'home',
      label: 'Home',
      icon: <MailOutlined />,
    },
    {
      key: 'contents',
      label: '内容管理',
      path: "contents",
      icon: <ReadOutlined />,
      children: [
        // {
        //   key: 'menu',
        //   path: "menu", label: '菜单管理'
        // },
        // {
        //   key: 'articles',
        //   path: "articles", label: '文章管理'
        // },
        // {
        //   key: 'user',
        //   path: "user", label: '用户管理'
        // },
        ...contentArr1
      ],
    },
    // {
    //   key: 'system2',
    //   label: '系统管理2',
    //   path: "system2",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     ...contentArr1
    //   ],
    // },
    {
      key: 'system',
      label: '系统管理',
      path: "system",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: 'menu',
          path: "menu", 
          label: '菜单管理'
        },
        {
          key: 'articles',
          path: "articles", 
          label: '文章管理'
        },
        {
          key: 'user',
          path: "user", 
          label: '用户管理'
        },
        // ...contentArr1
      ],
    },
    {
      type: 'divider',
    },
  ];

}