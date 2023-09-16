import styles from '../registration/signin.module.css'
import logo_modal from '../../assets/images/logo_modal.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, setUser } from '../../store/state/userSlice'
import {
  useLoginUserMutation,
  useGetTokenUserMutation,
} from '../../store/api/musicApi'
import { useForm } from 'react-hook-form'
import { userAutorization, userGetToken } from '../../redux/events/auth'

export default function Signin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log('RENDER LOGIN SCREEN')

  // const [userToken, setUserToken] = useState(localStorage.getItem('refreshToken'))
  // const [pass, setPass] = useState('')

  const { register, handleSubmit, errors } = useForm()
  const [loginUser, { isSuccess }] = useLoginUserMutation()
  const [getTokenUser] = useGetTokenUserMutation()
  // const [isLoading, setIsLoading] = useState(false)
  // const [refToken, setRefToken] = useState(localStorage.getItem('refreshToken'))
  // localStorage.getItem('refreshToken')

  // const [isUser, setIsUser] = useState({
  //   email: '',
  //   password: '',
  // })

  // console.log('isUser >', isUser)

  // const userFromState = useSelector(loginUser)
  // console.log('userFromState >', userFromState)

  // const token = localStorage.getItem('refreshToken')
  // const isLogin = () => {
  //   const token = localStorage.getItem('refreshToken')
  //   // setRefToken(localStorage.getItem('refreshToken'))
  //   // console.log(refToken)
  //   // console.log('getUserFromStore', getUser)
  //   if (token === '') {
  //     console.log('GOTOloginN')
  //     // navigate('/login')
  //   } else {
  //     console.log('mainpage')
  //     navigate('/')
  //   }
  // }

  // const [refToken, setRefToken] = useState(localStorage.getItem('refreshToken'))
  // localStorage.getItem('refreshToken')
  // console.log('refToken before >', refToken)

  // useEffect(() => {
  //   console.log('useEffect func')
  //   // console.log('refToken >', refToken)
  //   localStorage.getItem('refreshToken') === null
  //     ? console.log('NONONONO')
  //     : navigate('/')
  // }, [localStorage.getItem('refreshToken')])

  // navigate('/')

  const onSubmit = async (data, e) => {
    e.preventDefault()
    // const [refToken, setRefToken] = useState(
    //   localStorage.getItem('refreshToken')
    // )
    console.log(data)
    console.log(e)
    await userAutorization(loginUser, getTokenUser, dispatch, data, navigate)

    let token = localStorage.getItem('refreshToken')
    // setRefToken(token)
    console.log(token)
    // setUserToken(token)

    // setRefToken(localStorage.getItem('refreshToken'))
    // console.log('tTOKEN > ', localStorage.getItem('refreshToken'))
    // // const token = localStorage.getItem('refreshToken')
    // console.log('refToken >', refToken)
    // console.log('onSubmit func')
    // console.log('refToken >', refToken)
    // navigate('/')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form
            className={styles.modal__form_login}
            id="formLogIn"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.modal__logo}>
              <img src={logo_modal} alt="logo" />
            </div>
            <input
              className={`${styles.modal__input} ${styles.login}`}
              {...register('email')}
              type="text"
              id="EmailLog"
              placeholder="e-mail"
            ></input>
            <input
              className={`${styles.modal__input} ${styles.password}`}
              {...register('password')}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            ></input>
            <button
              className={styles.modal__btn_enter}
              id="btnEnter"
              type="submit"
            >
              Войти
            </button>
            <button className={styles.modal__btn_signup} id="btnSignUp">
              <Link to="/signup">Зарегистрироваться</Link>{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
