import BarPlayer from '../bar/barPlayer'
import BarVolume from '../bar/barVolume'
import styles from '../bar/bar.module.css'

export default function Bar() {
  return (
    <div className={styles.bar__content}>
      <div className={styles.bar__player_progress}></div>
      <div className={styles.bar__player_block}>
        <BarPlayer />
        <BarVolume />
      </div>
    </div>
  )
}
