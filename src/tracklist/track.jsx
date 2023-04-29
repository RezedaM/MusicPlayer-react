// import './tracklist/track.css'
import { useEffect } from 'react'
import { PropsWithChildren, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Sprite from '../assets/icons/sprite.svg'

function Track({ loading, children }) {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const items = [
    {
      track_file: 'link',
      name: 'Elektro',
      author: 'Dynoro, Outwork, Mr. Gee',
      album: 'Elektro',
      duration: '2:22',
    },
  ]
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <SkeletonTheme color="#FFFFFF" highlightColor="#f2f2f2">
                {loadingPage ? (
                  <Skeleton count={1} />
                ) : (
                  <use xlinkHref={`${Sprite}#icon-note`}></use>
                )}
              </SkeletonTheme>
            </svg>
          </div>
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={350} height={17} borderRadius={0} count={1} />
            ) : (
              <div className="track__title-text">
                <a className="track__title-link" href={items[0].track_file}>
                  {items[0].name} <span className="track__title-span"></span>
                </a>
              </div>
            )}
          </SkeletonTheme>
          {/* <div className="track__title-text"> */}
          {/* <SkeletonTheme color="#FFFFFF" highlightColor="#f2f2f2">
              {loadingPage ? (
                <Skeleton count={1} />
              ) : (
                <a className="track__title-link" href={items[0].track_file}>
                  {items[0].name} <span className="track__title-span"></span>
                </a>
              )}
            </SkeletonTheme> */}
          {/* </div> */}
        </div>

        <div className="track__author">
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={290} height={17} borderRadius={0} count={1} />
            ) : (
              <a className="track__author-link" href="http://">
                {items[0].author}
              </a>
            )}
          </SkeletonTheme>
          {/* <a className="track__author-link" href="http://">
            {items[0].author}
          </a> */}
        </div>
        <div className="track__album">
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={290} height={17} borderRadius={0} count={1} />
            ) : (
              <a className="track__album-link" href="http://">
                {items[0].album}
              </a>
            )}
          </SkeletonTheme>
          {/* <a className="track__album-link" href="http://">
            {items[0].album}
          </a> */}
        </div>
        <SkeletonTheme baseColor="#313131" highlightColor="#313131">
          {loadingPage ? (
            <Skeleton width={40} height={17} borderRadius={0} count={1} />
          ) : (
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use xlinkHref={`${Sprite}#icon-like`}></use>
              </svg>
              <span className="track__time-text">{items[0].duration}</span>
            </div>
          )}
        </SkeletonTheme>
        {/* <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref={`${Sprite}#icon-like`}></use>
          </svg>
          <span className="track__time-text">{items[0].duration}</span>
        </div> */}
      </div>
    </div>
  )
}

export default Track
