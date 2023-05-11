import { useEffect } from 'react'
import { PropsWithChildren, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../sidebar/sidebarItem.module.css'
import { Link } from 'react-router-dom'

export default function SidebarItem({ sidebarImage,sidebarLink}) {
  const [loadingPage, setLoadingPage] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.sidebar__item}>
      <SkeletonTheme baseColor="#313131" highlightColor="#313131">
        {loadingPage ? (
          <Skeleton width={250} height={150} borderRadius={0} count={1} />
        ) : (
          <Link className={styles.sidebar__link} to={`/playlist/${sidebarLink}`}>
            <img
              className={styles.sidebar__img}
              src={sidebarImage}
              alt="day's playlist"
            />
          </Link>
        )}
      </SkeletonTheme>
    </div>
  )
}
