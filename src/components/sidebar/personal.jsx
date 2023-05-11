import styles from '../sidebar/personal.module.css'
export default function Personal(props) {
  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
      <div className={styles.sidebar__avatar}></div>
    </div>
  )
}
