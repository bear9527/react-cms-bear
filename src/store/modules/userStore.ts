import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {
    token: '',
    userInfo: null
  },
  reducers: {
    setToken(state, actions){
      state.token = actions.payload
    },
    setMyInfo(state, actions){
      state.userInfo = actions.payload
    },
  }
})

const { setToken, setMyInfo } = user.actions
const reducer = user.reducer

export {
  setToken,
  setMyInfo
}
export default reducer