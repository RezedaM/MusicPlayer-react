// import './tracklist/track.css'
import Sprite from '../assets/icons/sprite.svg'

function Track(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref={`${Sprite}#icon-note`}></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href={props.track_file}>
              {props.name} treeee<span className="track__title-span"></span>
            </a>
            {props.name}
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.author} greeeee
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.album} hhlhlj;o
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref={`${Sprite}#icon-like`}></use>
          </svg>
          <span className="track__time-text">{props.duration} 3:56</span>
        </div>
      </div>
    </div>
  )
}

export default Track
