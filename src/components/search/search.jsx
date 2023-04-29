import styles from '../search/search.module.css'
import Sprite from '../../assets/icons/sprite.svg'

export default function Search(props) {
  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use xlinkHref={`${Sprite}#icon-search`}></use>
      </svg>
      <input
        className={styles.search__text}
        type="search"
        placeholder="Поиск"
        name="search"
      />{' '}
    </div>
  )
}
