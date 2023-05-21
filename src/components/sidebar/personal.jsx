import { useThemeContext } from '../../contexts/theme'
import styles from '../sidebar/personal.module.css'
export default function Personal(props) {
  const {currentTheme} = useThemeContext()
  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personal_name} style={{color: currentTheme['--a-color']}}>Sergey.Ivanov</p>
      <div className={styles.sidebar__avatar} style={{backgroundColor: currentTheme['--page-background']}}></div>
    </div>
  )
}
