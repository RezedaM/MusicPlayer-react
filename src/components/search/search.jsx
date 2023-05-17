import styles from '../search/search.module.css'
import Sprite from '../../assets/icons/sprite.svg'
import { useThemeContext } from '../../contexts/theme'

export default function Search(props) {
  const {currentTheme } = useThemeContext()
  console.log(currentTheme)

  return (
    <div
      className={styles.centerblock__search}
      style={{ borderBottom: currentTheme['--border-bottom']}}
    >
      <svg
        className={styles.search__svg}
        style={{ stroke: currentTheme['--a-color'] }}
      >
        <use xlinkHref={`${Sprite}#icon-search`}></use>
      </svg>
      <input
        className={styles.search__text}
        style={{ color: currentTheme['--a-color'] }}
        type="search"
        placeholder="Поиск"
        name="search"
      />{' '}
    </div>
  )
}
