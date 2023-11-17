import { createSlice } from '@reduxjs/toolkit'

const userInitialState = {
  login: false,
  id: 0,
  token: '',
  userName: '',
  email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setToken(state, action) {
      return {
        ...state,
        refresh: action.payload.refresh,
        access: action.payload.access,
      }
    },
    setUser(state, action) {
      return {
        ...state,
        login: true,
        id: action.payload.id,
        token: action.payload.token,
        username: action.payload.userName,
        email: action.payload.email,
        password: action.payload.password,
      }
    },
    getUser: (state) => state,
    userLogout(state) {
      return { userInitialState }
    },
  },
})

export const { setUser, getUser, userLogout, setToken } = userSlice.actions
export default userSlice.reducer
