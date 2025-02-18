import request from "../utils/request"
export interface ILoginInfo{
  username: string;
  passwrod: string;
}
export function login(data: ILoginInfo){
  return request({
    url: `/user/login`,
    method: 'post',
    data
  })
}

export function regUser(data: ILoginInfo){
  return request({
    url: `/user/regUser`,
    method: 'post',
    data
  })
}
export function getUserInfo(){
  return request({
    url: `/my/userInfo`,
    method: 'get',
  })
}
  