import Sprite from '../../assets/icons/sprite.svg'
import { useEffect } from 'react'
import { PropsWithChildren, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../bar/barPlayer.module.css'

export default function BarPlayer() {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={styles.bar__player}>
      <div className={styles.player__controls}>
        <div className={styles.player__btn_prev}>
          <svg className={styles.player__btn_play_svg} alt="prev">
            <use xlinkHref={`${Sprite}#icon-prev`}></use>
          </svg>
        </div>
        <div className={`${styles.player__btn_play} ${styles.btn}`}>
          <svg className={styles.player__btn_play_svg} alt="play">
            <use xlinkHref={`${Sprite}#icon-play`}></use>
          </svg>
        </div>
        <div className={styles.player__btn_next}>
          <svg className={styles.player__btn_next_svg} alt="next">
            <use xlinkHref={`${Sprite}#icon-next`}></use>
          </svg>
        </div>
        <div className={`${styles.player__btn_repeat} ${styles.btn_icon}`}>
          <svg className={styles.player__btn_shuffle_svg} alt="repeat">
            <use xlinkHref={`${Sprite}#icon-repeat`}></use>
          </svg>
        </div>
        <div className={`${styles.player__btn_shuffle} ${styles.btn_icon}`}>
          <svg className={styles.player__btn_shuffle_svg} alt="shuffle">
            <use xlinkHref={`${Sprite}#icon-shuffle`}></use>
          </svg>
        </div>
      </div>

      <div className={styles.player__track_play}>
        <div className={styles.track_play__contain}>
          <div className={styles.track_play__image}>
            <SkeletonTheme baseColor="#313131" highlightColor="#313131">
              {loadingPage ? (
                <Skeleton width={51} height={51} borderRadius={0} count={1} />
              ) : (
                <svg className={styles.track_play__svg} alt="music">
                  <use xlinkHref={`${Sprite}#icon-note`}></use>
                </svg>
              )}
            </SkeletonTheme>
          </div>
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={59} height={15} borderRadius={0} count={1} />
            ) : (
              <div className={styles.track_play__author}>
                <a className={styles.track_play__author_link} href="http://">
                  Ты та...
                </a>
              </div>
            )}
          </SkeletonTheme>
          <SkeletonTheme baseColor="#313131" highlightColor="#313131">
            {loadingPage ? (
              <Skeleton width={59} height={15} borderRadius={0} count={1} />
            ) : (
              <div className={styles.track_play__album}>
                <a className={styles.track_play__album_link} href="http://">
                  Баста
                </a>
              </div>
            )}
          </SkeletonTheme>
        </div>

        <div className={styles.track_play__like_dis}>
          <div className={`${styles.track_play__like} ${styles.btn_icon}`}>
            <svg className={styles.track_play__like_svg} alt="like">
              <use xlinkHref={`${Sprite}#icon-like`}></use>
            </svg>
          </div>
          <div className={`${styles.track_play__dislike} ${styles.btn_icon}`}>
            <svg className={styles.track_play__dislike_svg} alt="dislike">
              <use xlinkHref={`${Sprite}#icon-dislike`}></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
