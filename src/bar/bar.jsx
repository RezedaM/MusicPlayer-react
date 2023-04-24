import BarPlayer from '../bar/barPlayer'
import BarVolume from '../bar/barVolume'

export default function Bar() {
  return (
    <div className="bar__content">
      <div className="bar__player-progress"></div>
      <div className="bar__player-block">
        <BarPlayer />
        <BarVolume />
      </div>
    </div>
  )
}
