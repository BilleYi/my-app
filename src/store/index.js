import { configureStore } from "@reduxjs/toolkit"
import loginSlice from "./features/loginSlice"

// configureStore创建一个redux数据
export default configureStore({
  reducer: {
    loginInfo: loginSlice,
  },
})
