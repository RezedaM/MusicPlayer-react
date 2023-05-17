import Sprite from '../../assets/icons/sprite.svg'
import { useThemeContext } from '../../contexts/theme'
import styles from '../bar/barVolume.module.css'

export default function BarVolume() {
  const { currentTheme } = useThemeContext()
  return (
    <div className={styles.bar__volumeblock}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <svg className={styles.volume__svg} alt="volume">
            {currentTheme.theme === 'dark' ? (
              <use xlinkHref={`${Sprite}#icon-volume`}></use>
            ) : (
              <use xlinkHref={`${Sprite}#icon-volume-light`}></use>
            )}
            {/* <use xlinkHref={`${Sprite}#icon-volume`}></use> */}
          </svg>
        </div>
        <div className={`${styles.volume__progress} ${styles.btn}`}>
          <input
            className={`${styles.volume__progressline} ${styles.btn}`}
            style={{ backgroundColor: currentTheme['--range-progr'] }}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}
