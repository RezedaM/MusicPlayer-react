import Sprite from '../../assets/icons/sprite.svg'
import styles from '../bar/barVolume.module.css'

export default function BarVolume() {
  return (
    <div className={styles.bar__volumeblock}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <svg className={styles.volume__svg} alt="volume">
            <use xlinkHref={`${Sprite}#icon-volume`}></use>
          </svg>
        </div>
        <div className={`${styles.volume__progress} ${styles.btn}`}>
          <input
            className={`${styles.volume__progressline} ${styles.btn}`}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}
