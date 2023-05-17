import BarPlayer from '../bar/barPlayer'
import BarVolume from '../bar/barVolume'
import styles from '../bar/bar.module.css'
import { useRef, useState } from 'react'
import ProgressBar from './progressBar'
import { useThemeContext } from '../../contexts/theme'

export default function Bar({ playTrack }) {
  playTrack = '/Bobby_Marleni_-_Dropin.mp3'
  const audioRef = useRef(null)
  const durationRef = useRef(null)

  const [duration, setDuration] = useState(0)
  // const [progress, setProgress] = useState(0)

  const onLoadedMetadata = () => {
    const duration_in_seconds = audioRef.current.duration
    setDuration(duration_in_seconds)
    durationRef.current.max = duration_in_seconds
    console.log(audioRef.current.duration)
  }
  const {currentTheme} = useThemeContext()

  return (
    <div className={styles.bar__content}>
      <audio
        controls
        ref={audioRef}
        src={playTrack}
        className={styles.audio_player}
        onLoadedMetadata={onLoadedMetadata}
      />

      <ProgressBar {...{ audioRef, duration, durationRef }} />

      <div className={styles.bar__player_block} style={{backgroundColor: currentTheme['--burger-back']}}>
        <BarPlayer {...{ audioRef, setDuration, durationRef }} />
        <BarVolume />
      </div>
    </div>
  )
}
