import styles from '../registration/signin.module.css'
import logo_modal from '../../assets/images/logo_modal.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Signin({ setUser }) {
  //   const [userName, setUserName] = useState('')

  const [userName, setUserName] = useState(localStorage.getItem('login'))
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }
  const handlePassrChange = (e) => {
    setPass(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setUser({ login: userName })
    // console.log(login)
    navigate('/')
  }

  useEffect(() => {
    localStorage.setItem('login', userName)
  })

//   useEffect(()=> {
//     localStorage.getItem('login') ? localStorage.removeItem('login') : localStorage.setItem('login', userName)
//   })
  
  //   function handleSubmit(e) {
  //     e.preventDefault()
  //     setUser({ login: userName })
  //     // console.log(login)
  //     navigate('/')
  //   }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container_enter}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} id="formLogIn" action="#">
            <div className={styles.modal__logo}>
              <img src={logo_modal} alt="logo" />
            </div>
            <input
              className={`${styles.modal__input} ${styles.login}`}
              type="text"
              name="login"
              id="formlogin"
              placeholder="Логин"
            ></input>
            <input
              className={`${styles.modal__input} ${styles.password}`}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            ></input>
            <button
              className={styles.modal__btn_enter}
              id="btnEnter"
              onClick={handleSubmit}
            >
              <Link to="/">Войти</Link>{' '}
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
