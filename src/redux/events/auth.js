import { Login } from '../../pages/login/login'
import { setUser, setToken } from '../../store/state/userSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const userRegistration = async (userSignup, dispatch, userObj) => {
  try {
    const response = await userSignup({
      email: userObj.email,
      username: userObj.username,
      password: userObj.password,
    })
    let responseData = JSON.parse(JSON.stringify(response.data))
    responseData.password = userObj.password
    console.log('responseData >', responseData)
    dispatch(setUser(responseData))
  } catch (error) {
    console.log(error)
  }
}

export const userAutorization = async (
  loginUser,
  getToken,
  dispatch,
  userObj,
  navigate
) => {
  try {
    const response = await loginUser({
      email: userObj.email,
      password: userObj.password,
    })
    let responseData = JSON.parse(JSON.stringify(response.data))
    responseData.password = userObj.password
    console.log('responseData >', responseData)
    dispatch(setUser(responseData))

    if (responseData.email) {
      localStorage.setItem('username', responseData.username)
      localStorage.setItem('email', responseData.email)
      localStorage.setItem('password', responseData.password)
      localStorage.setItem('id', responseData.id)
    }

    console.log('username from storage >', localStorage.getItem('username'))
    console.log('email from storage >', localStorage.getItem('email'))
    console.log('password from storage >', localStorage.getItem('password'))
    console.log('id from storage >', localStorage.getItem('id'))

    // if (responseData.id) {
    //     try {
    //       const token = await getToken({
    //         refresh: userObj.refresh,
    //         access: userObj.access,
    //       })
    //       let responseToken = JSON.parse(JSON.stringify(token.data))
    //       console.log('responseToken >', responseToken)
    //       responseData.token = responseToken.access
    //       dispatch(setUser(responseData))
    //     } catch (error) {
    //       console.log(error)
    //     }
    await userGetToken(getToken, userObj, navigate)
  } catch (error) {
    console.log(error)
  }

  //   if (responseData.id) {
  //     try {
  //       const token = await getToken({
  //         refresh: userObj.refresh,
  //         access: userObj.access,
  //       })
  //       let responseToken = JSON.parse(JSON.stringify(token.data))
  //       console.log('responseToken >', responseToken)
  //       responseData.token = responseToken.access
  //       dispatch(setUser(responseData))
  //     } catch (error) {
  //       console.log(error)
  //     }
}

export const userGetToken = async (getToken, userObj, navigate) => {
  //   const [refToken, setRefToken] = useState(localStorage.getItem('refreshToken'))
//   const navigateto = useNavigate()

  //   try {
  const token = await getToken({
    email: userObj.email,
    password: userObj.password,
  })
  let responseToken = JSON.parse(JSON.stringify(token.data))
  console.log('responseToken >', responseToken)
  // responseData.token = responseToken.access
  // dispatch(setUser(responseToken))
  if (responseToken.refresh) {
    //   setRefToken(localStorage.setItem('refreshToken', responseToken.refresh))
    localStorage.setItem('refreshToken', responseToken.refresh)
    console.log('token from storage >', localStorage.getItem('refreshToken'))
    // setRefToken(localStorage.getItem('refreshToken'))
    // navigateto('/')
    //   console.log('token from storage >', refToken)
  }
  // console.log('token from storage >', localStorage.getItem('tokenAccess'))
  //   } catch (error) {
  //     console.log(error)
  //   }
}

export const getAccessToken = async (token, getAccessToken, dispatch) => {
  const accessToken = await getAccessToken({
    refresh: token,
  })
  let responseAccessToken = JSON.parse(JSON.stringify(accessToken.data))
  console.log('response_ACCESS_Token >', responseAccessToken)
  dispatch(getAccessToken(responseAccessToken))
  localStorage.setItem('accessToken', responseAccessToken.access)
}
