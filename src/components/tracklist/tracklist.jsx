import Track from './track'
import Sprite from '../../assets/icons/sprite.svg'
import styles from '../tracklist/tracklist.module.css'

function TrackList(props) {
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
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
      </div>
    </div>
  )
}

export default TrackList
