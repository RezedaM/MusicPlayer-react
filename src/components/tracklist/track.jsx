import styles from '../tracklist/track.module.css'
import { useEffect } from 'react'
import { PropsWithChildren, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Sprite from '../../assets/icons/sprite.svg'
import { useThemeContext } from '../../contexts/theme'

function Track({ author, album, name, duration, track_file }) {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const { currentTheme } = useThemeContext()

  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <div className={styles.track__title}>
          <div
            className={styles.track__title_image}
            style={{ background: currentTheme['--page-background'] }}
          >
            <svg className={styles.track__title_svg} alt="music">
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
              <div className={styles.track__title_text}>
                <a
                  className={styles.track__title_link}
                  style={{ color: currentTheme['--a-color'] }}
                  href={track_file}
                >
                  {name}{' '}
                  <span
                    className={styles.track__title_span}
                    style={{ color: currentTheme['--border-bottom'] }}
                  ></span>
                </a>
              </div>
            )}
          </SkeletonTheme>
        </div>

        <div className={styles.track__author}>
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={290} height={17} borderRadius={0} count={1} />
            ) : (
              <a
                className={styles.track__author_link}
                style={{ color: currentTheme['--a-color'] }}
                href="http://"
              >
                {author}
              </a>
            )}
          </SkeletonTheme>
        </div>
        <div className={styles.track__album}>
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={290} height={17} borderRadius={0} count={1} />
            ) : (
              <a className={styles.track__album_link} href="http://">
                {album}
              </a>
            )}
          </SkeletonTheme>
        </div>
        <SkeletonTheme baseColor="#313131" highlightColor="#313131">
          {loadingPage ? (
            <Skeleton width={40} height={17} borderRadius={0} count={1} />
          ) : (
            <div className={styles.track__time}>
              <svg className={styles.track__time_svg} alt="time">
                <use xlinkHref={`${Sprite}#icon-like`}></use>
              </svg>
              <span className={styles.track__time_text}>{duration}</span>
            </div>
          )}
        </SkeletonTheme>
      </div>
    </div>
  )
}

export default Track
