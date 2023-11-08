import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body) => {
        return {
          url: 'user/login/',
          method: 'POST',
          body,
        }
      },
    }),
    signupUser: build.mutation({
      query: (body) => {
        return {
          url: 'user/signup/',
          method: 'POST',
          body,
        }
      },
      // transformResponse: (response, meta, arg) => response.id,
      // transformResponse: (response, meta, arg) => response.id,
    }),
    getTokenUser: build.mutation({
      query: (body) => {
        return {
          url: 'user/token/',
          method: 'POST',
          body,
        }
      },
    }),
    getAccessToken: build.mutation({
      query: (body) => {
        return {
          url: 'user/token/refresh/',
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

export const {
  useLoginUserMutation,
  useSignupUserMutation,
  useGetTokenUserMutation,
  useGetAccessTokenMutation,
} = musicApi
