import Personal from './personal'
import SidebarItem from './sidebarItem'
import playlist01 from '../../assets/images/playlist01.png'
import playlist02 from '../../assets/images/playlist02.png'
import playlist03 from '../../assets/images/playlist03.png'
import styles from '../sidebar/sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.main__sidebar}>
      <Personal />
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <SidebarItem sidebarImage={playlist01} />
          <SidebarItem sidebarImage={playlist02} />
          <SidebarItem sidebarImage={playlist03} />
        </div>
      </div>
    </div>
  )
}
