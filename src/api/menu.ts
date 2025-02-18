
import { CateGoryParams } from "../typings"
import request from "../utils/request"

// 获取菜单
export function getMenus() {
  return request({
    url: `/menu/getMenus`,
    method: 'get',
  })
}

// 新增菜单
export function addMenu(data: CateGoryParams){
  return request({
    url: `/menu/addMenu`,
    method: 'post',
    data
  })
}


// 获取菜单信息
export function getMenuInfo(params: {id: number}) {
  return request({
    url: `/menu/getMenuInfo`,
    method: 'get',
    params
  })
}