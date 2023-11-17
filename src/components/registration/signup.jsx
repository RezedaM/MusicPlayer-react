import styles from '../registration/signup.module.css'
import logo_modal from '../../assets/images/logo_modal.png'
import { Link, useNavigate } from 'react-router-dom'
import { useSignupUserMutation } from '../../store/api/musicApi'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../store/state/userSlice'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { userRegistration } from '../../redux/events/auth'

export default function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, errors } = useForm()
  const [signupUser, { isSuccess }] = useSignupUserMutation()
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  console.log('newUser >', newUser)

  const onSubmit = () => {
    userRegistration(signupUser, dispatch, newUser)
    // console.log(data)
    // dispatch(
    //   setUser({
    //     login: true,
    //     id: 1,
    //     email: data.email,
    //     username: data.email,
    //   })
    // )
    // signupUser(newUser)
    // // const stateStore = useSelector(state)
    // // console.log(stateStore)
    // navigate('/login')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container_signup}>
        <div className={styles.modal__block}>
          <form
            className={styles.modal__form_login}
            id="formReg"
            action="#"
            onSubmit={onSubmit}
          >
            <div className={styles.modal__logo}>
              <img src={logo_modal} alt="logo" />
            </div>
            <input
              className={`${styles.modal__input} ${styles.login}`}
              {...register('username')}
              type="text"
              name="login"
              id="loginReg"
              placeholder="Логин"
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
            <input
              className={`${styles.modal__input} ${styles.login}`}
              {...register('email')}
              type="text"
              name="email"
              id="EmailReg"
              placeholder="email"
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />

            <input
              className={`${styles.modal__input} ${styles.password_first}`}
              {...register('password')}
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
            <input
              className={`${styles.modal__input} ${styles.password_double}`}
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <button
              className={styles.modal__btn_signup_ent}
              id="SignUpEnter"
              onClick={handleSubmit(onSubmit)}
            >
              <Link to="/login">Зарегистрироваться</Link>{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
