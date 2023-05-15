import Track from './track'
import Sprite from '../../assets/icons/sprite.svg'
import styles from '../tracklist/tracklist.module.css'
import { SELECTIONS } from '../../constants'
import { ALLTRACKS, MYTRACKS } from '../../constants'
import { useParams } from 'react-router-dom'

function TrackList({ props, listId, personal }) {
  const params = useParams()
  // console.log(params)
  let playId = params.id
  // console.log(playId)
  // console.log(personal)
  let selectItems = []
  if (personal === 'yes') {
    selectItems = MYTRACKS
    // console.log('GOGOGOGOGOG')
  } else if (playId === undefined) {
    selectItems = ALLTRACKS
  } else {
    playId = Number(playId) - 1
    // console.log(playId)
    selectItems = SELECTIONS[playId].items
  }

  // const params = useParams()
  // const playId = Number(params.id) - 1
  // console.log(playId)

  // selectItems = SELECTIONS[playId].items
  // selectItems.map((el) => console.log(el.album))
  // console.log(selectItems)

  return (
    <div className={styles.centerblock__content}>
      <div className={`${styles.content__title} ${styles.playlist_title}`}>
        <div className={`${styles.playlist_title__col} ${styles.col01}`}>
          Трек
        </div>
        <div className={`${styles.playlist_title__col} ${styles.col02}`}>
          ИСПОЛНИТЕЛЬ
        </div>
        <div className={`${styles.playlist_title__col} ${styles.col03}`}>
          АЛЬБОМ
        </div>
        <div className={`${styles.playlist_title__col} ${styles.col04}`}>
          <svg className={styles.playlist_title__svg} alt="time">
            <use xlinkHref={`${Sprite}#icon-watch`}></use>
          </svg>
        </div>
      </div>
      <div className={styles.content__playlist}>
        {selectItems.map((item) => (
          <Track
            key={item.id}
            track_file={item.track_file}
            duration={`${String(item.duration_in_seconds)[0]}:${
              String(item.duration_in_seconds)[1]
            }${String(item.duration_in_seconds)[2]}`}
            album={item.album}
            name={item.name}
            author={item.author}
          />
        ))}
      </div>
    </div>
  )
}

export default TrackList
