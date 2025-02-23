import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import EditMenuDetail from '../pages/menuManage/Detail'
const Layout = lazy(() => import('../Layout'))
const Home = lazy(() => import('../pages/home/Home'))
const MenuManage = lazy(() => import('../pages/menuManage/'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Login = lazy(() => import('../pages/Login')) 
const User = lazy(() => import('../pages/User'))
const UserDetail = lazy(() => import('../pages/UserDetail'))
const Articles = lazy(() => import('../pages/articles'))
const ArticleDetail = lazy(() => import('../pages/articles/Detail'))
const MenuDetail = lazy(() => import('../pages/menuManage/Detail'))
const Contents = lazy(() => import('../pages/contents'))

const constantRoutes = [
  { path: 'login', title: '登录', element: <Login /> },
  {
    path: '/',
    title: '首页',
    hidden: true,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={'/home'} replace />
      },
      // hidden:false代表要显示在侧边导航栏，其余皆不显示
      {
        key: 'home',
        path: 'home',
        title: '首页',
        element: <Home />, hidden: false
      },
      {
        key: 'menu',
        path: 'menu',
        title: '菜单管理',
        element: <MenuManage />,
        meta: {
          breadcrumb: [
            {
              href: '/',
              title: '首页',
            },
            {
              title: '菜单管理'
            }
          ]
        }
      },

      {
        key: 'editMenuDetail',
        path: 'editMenuDetail/:id?',
        title: '菜单编辑',
        element: <EditMenuDetail />,
        meta: {
          breadcrumb: [
            {
              href: '/',
              title: '首页',
            },
            {
              href: '/menu',
              title: '菜单管理'
            },
            {
              title: '菜单详情'
            }
          ]
        }
      },
      {
        key: 'menuDetail',
        path: 'menuDetail/:id?',
        title: '文章详情',
        element: <MenuDetail />,
        meta: {
          breadcrumb: [
            {
              href: '/',
              title: '首页',
            },
            {
              href: '/menu',
              title: '菜单管理'
            },
            {
              title: '菜单编辑'
            }
          ]
        }
      },
      {
        key: 'articles',
        path: 'articles',
        title: '文章管理',
        element: <Articles />,
        meta: {
          breadcrumb: [
            {
              href: '/',
              title: '首页',
            },
            {
              title: '文章管理'
            }
          ]
        }
      },
      {
        key: 'articleDetail',
        path: 'articleDetail/:id?',
        title: '文章详情',
        element: <ArticleDetail />,
        meta: {
          breadcrumb: [
            {
              href: '/',
              title: '首页',
            },
            {
              href: '/articles',
              title: '文章管理'
            },
            {
              title: '文章详情'
            }
          ]
        }
      },

      {
        key: 'contents',
        path: 'contents/:id?',
        title: '内容管理',
        element: <Contents />,
        meta: {
          breadcrumb: [
            {
              href: '/',
              title: '首页',
            },
            {
              title: '内容管理'
            }
          ]
        }
      },
      
      {
        key: 'user',
        path: 'user',
        title: '用户管理',
        element: <User />,
        meta: {
          breadcrumb: [
            {
              href: '/',
              title: '首页',
            },
            {
              title: '用户管理'
            }
          ]
        }
      },
      {
        key: 'userDetail',
        path: 'userDetail/:id?',
        title: '用户编辑',
        element: <UserDetail />,
        meta: {
          breadcrumb: [
            {
              href: '/',
              title: '首页',
            },
            {
              href: '/user',
              title: '用户管理'
            },
            {
              title: '用户详情'
            }
          ]
        }
      }

    ]
  },
  { path: '*', title: '404页面', element: <NotFound /> }
]
export default constantRoutes