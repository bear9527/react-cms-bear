
import { CateGoryParams } from "../typings/"
import request from "../utils/request"

// 获取菜单
export function getAllCategory() {
  return request({
    url: `/article/getAllCategory`,
    method: 'get',
  })
}

// 新增菜单
export function addMenu(data: CateGoryParams){
  return request({
    url: `/article/addCategory`,
    method: 'post',
    data
  })
}