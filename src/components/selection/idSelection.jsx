// import { Search } from '../search/search'
import styles from '../selection/idSelection.module.css'
import TrackList from '../tracklist/tracklist'
import Filter from '../filter-by/filter'
import Search from '../search/search'
import { useParams } from 'react-router-dom'
import { useThemeContext } from '../../contexts/theme'
export default function IdSelection({ header }) {
  const selectHeader = ['Плейлист дня ', '100 танцевальных хитов', 'Инди заряд']
  const params = useParams()
  const playId = Number(params.id) - 1

  header = selectHeader[playId]

  const {currentTheme} = useThemeContext()
  

  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2} style={{color: currentTheme['--a-color']}}>{header}</h2>
      <TrackList />
    </div>
  )
}
