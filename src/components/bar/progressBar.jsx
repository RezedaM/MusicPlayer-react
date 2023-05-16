import { useState, useEffect, useRef } from 'react'
import styles from './progressBar.module.css'

export default function ProgressBar({ audioRef, duration, durationRef }) {
  //   const formatTime = (time) => {
  //     if (time && !isNaN(time)) {
  //       const minutes = Math.floor(time / 60)
  //       const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  //       const seconds = Math.floor(time % 60)
  //       const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  //       return `${formatMinutes}:${formatSeconds}`
  //     }
  //     return '00:00'
  //   }
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const t = setInterval(() => {
      progressGo()
    }, 100)
    return () => {
      clearInterval(t)
    }
  })
  const progressGo = () => {
    if (!audioRef.current.ended) {
      setProgress(audioRef.current.currentTime)
    }

    // const currentTime = audioRef.current.currentTime
    setProgress(audioRef.current.currentTime)
    durationRef.current.value = progress || 0
    durationRef.current.style.setProperty(
      '--range-progress',
      `${(durationRef.current.value / duration) * 100}%`
    )
  }

//   timeline.addEventListener("click", (e) => {
//     progress.style.width = (e.offsetX/timeline.offsetWidth*100>>0).toString() + "%"
// })

// `${(durationRef.current.value / duration) * 100}%`

  const handleProgressChange = () => {
    audioRef.current.currentTime = durationRef.current.value
    // console.log(durationRef.current.value)
  }

  return (
    <div>
      <input
        className={styles.bar__player_progress}
        step="0.01"
        type="range"
        ref={durationRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
    </div>
  )
}
