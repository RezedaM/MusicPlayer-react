// import { Search } from '../search/search'
import styles from '../selection/mainSelection.module.css'
import TrackList from '../tracklist/tracklist'
import Filter from '../filter-by/filter'
import Search from '../search/search'
export default function MainSelection({ personal, header }) {
  // console.log(personal)
  let cls = ''
  personal === 'yes' ?  cls = `${styles.centerblock__filter} ${styles.hide}` : cls = `${styles.centerblock__filter}`
  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>{header}</h2>

      <div className={cls}>
        <label className={styles.filter__title}>Искать по:</label>
        <Filter
          options={[
            { value: 'Michael Jackson' },
            { value: 'Frank Sinatra' },
            { value: 'Calvin Harris' },
            { value: 'Zhu' },
            { value: 'Arctic Monkeys' },
          ]}
          optName={'исполнителю'}
        />
        <Filter
          options={[
            { value: 'Хип-хоп' },
            { value: 'Рок' },
            { value: 'Поп-музыка' },
            { value: 'Техно' },
            { value: 'Инди' },
          ]}
          optName={'жанру'}
        />
        <Filter
          options={[{ value: 'Более новые' }, { value: 'Более старые' }]}
          optName={'году выпуска'}
        />
      </div>

      <TrackList listId="0" personal={personal} />
    </div>
  )
}
