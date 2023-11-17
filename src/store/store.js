import { configureStore } from '@reduxjs/toolkit'
import { musicApi } from './api/musicApi'
import userReducer from './state/userSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    // user: userReducer,
    [musicApi.reducerPath]: musicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
})

export default store

setupListeners(store.dispatch)
