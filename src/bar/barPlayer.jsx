import Sprite from '../assets/icons/sprite.svg'
import { useEffect } from 'react'
import { PropsWithChildren, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function BarPlayer() {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="bar__player player">
      <div className="player__controls">
        <div className="player__btn-prev">
          <svg className="player__btn-prev-svg" alt="prev">
            <use xlinkHref={`${Sprite}#icon-prev`}></use>
          </svg>
        </div>
        <div className="player__btn-play _btn">
          <svg className="player__btn-play-svg" alt="play">
            <use xlinkHref={`${Sprite}#icon-play`}></use>
          </svg>
        </div>
        <div className="player__btn-next">
          <svg className="player__btn-next-svg" alt="next">
            <use xlinkHref={`${Sprite}#icon-next`}></use>
          </svg>
        </div>
        <div className="player__btn-repeat _btn-icon">
          <svg className="player__btn-repeat-svg" alt="repeat">
            <use xlinkHref={`${Sprite}#icon-repeat`}></use>
          </svg>
        </div>
        <div className="player__btn-shuffle _btn-icon">
          <svg className="player__btn-shuffle-svg" alt="shuffle">
            <use xlinkHref={`${Sprite}#icon-shuffle`}></use>
          </svg>
        </div>
      </div>

      <div className="player__track-play track-play">
        <div className="track-play__contain">
          <div className="track-play__image">
            <SkeletonTheme baseColor="#313131" highlightColor="#313131">
              {loadingPage ? (
                <Skeleton width={51} height={51} borderRadius={0} count={1} />
              ) : (
                <svg className="track-play__svg" alt="music">
                  <use xlinkHref={`${Sprite}#icon-note`}></use>
                </svg>
              )}
            </SkeletonTheme>
            {/* <svg className="track-play__svg" alt="music">
              <use xlinkHref={`${Sprite}#icon-note`}></use>
            </svg> */}
          </div>
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={59} height={15} borderRadius={0} count={1} />
            ) : (
              <div className="track-play__author">
                <a className="track-play__author-link" href="http://">
                  Ты та...
                </a>
              </div>
            )}
          </SkeletonTheme>
          {/* <div className="track-play__author">
            <a className="track-play__author-link" href="http://">
              Ты та...
            </a>
          </div> */}
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={59} height={15} borderRadius={0} count={1} />
            ) : (
              <div className="track-play__album">
                <a className="track-play__album-link" href="http://">
                  Баста
                </a>
              </div>
            )}
          </SkeletonTheme>
          {/* <div className="track-play__album">
            <a className="track-play__album-link" href="http://">
              Баста
            </a>
          </div> */}
        </div>

        <div className="track-play__like-dis">
          <div className="track-play__like _btn-icon">
            <svg className="track-play__like-svg" alt="like">
              <use xlinkHref={`${Sprite}#icon-like`}></use>
            </svg>
          </div>
          <div className="track-play__dislike _btn-icon">
            <svg className="track-play__dislike-svg" alt="dislike">
              <use xlinkHref={`${Sprite}#icon-dislike`}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
