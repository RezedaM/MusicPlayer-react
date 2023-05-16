import styles from '../registration/signup.module.css'
import logo_modal from '../../assets/images/logo_modal.png'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_signup}>
        <div className={styles.modal__block}>
          <form className={styles.modal__form_login} id="formLogIn" action="#">
            <div className={styles.modal__logo}>
              <img src={logo_modal} alt="logo" />
            </div>
            <input
              className={`${styles.modal__input} ${styles.login}`}
              type="text"
              name="login"
              id="loginReg"
              placeholder="Логин"
            />
            <input
              className={`${styles.modal__input} ${styles.password_first}`}
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <input
              className={`${styles.modal__input} ${styles.password_double}`}
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <button className={styles.modal__btn_signup_ent} id="SignUpEnter">
              <Link to="/login">Зарегистрироваться</Link>{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
