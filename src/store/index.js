import { configureStore } from '@reduxjs/toolkit'

import userStore from "./modules/userStore";
import breadcrumbReducer from './modules/counterStore'

export default configureStore({
  reducer: {
    // 注册子模块
    userStore,
    breadcrumbList: breadcrumbReducer
  }
})