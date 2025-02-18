import { createSlice } from '@reduxjs/toolkit'
// import { HomeOutlined } from "@ant-design/icons";

const counter = createSlice({
    // 模块名称独一无二
    name: 'counter',
    // 初始数据
    initialState: {
        breadcrumbList: [
            {
                href: '',
                title: '首页',
            },
            {
                href: '',
                title: 'Application123'
            },
            {
                title: 'Application',
            },]
    },
    // 修改数据的同步方法
    reducers: {
        // add (state) {
        //   state.count++
        // },
        setBreadcrumb(state, action) {
            state.breadcrumbList = action.payload
        }
    }
})

const { setBreadcrumb } = counter.actions
const breadcrumbReducer = counter.reducer

// 导出修改数据的函数
export { setBreadcrumb }
// 导出reducer
export default breadcrumbReducer