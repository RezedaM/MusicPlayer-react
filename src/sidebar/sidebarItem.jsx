import { useEffect } from 'react'
import { PropsWithChildren, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SidebarItem({ sidebarImage }) {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="sidebar__item">
      <SkeletonTheme baseColor="#313131" highlightColor="#313131">
        {loadingPage ? (
          <Skeleton width={250} height={150} borderRadius={0} count={1} />
        ) : (
          <a className="sidebar__link" href="#">
            <img
              className="sidebar__img"
              src={sidebarImage}
              alt="day's playlist"
            />
          </a>
        )}
      </SkeletonTheme>
      {/* <a className="sidebar__link" href="#">
        <img
          className="sidebar__img"
          src={sidebarImage}
          alt="day's playlist"
        />
      </a> */}
    </div>
  )
}
