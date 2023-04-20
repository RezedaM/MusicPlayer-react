import Personal from './personal'
import SidebarItem from './sidebarItem'
import playlist01 from '../assets/images/playlist01.png'
import playlist02 from '../assets/images/playlist02.png'
import playlist03 from '../assets/images/playlist03.png'

export default function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <Personal />
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarItem sidebarImage={playlist01} />
          <SidebarItem sidebarImage={playlist02}/>
          <SidebarItem sidebarImage={playlist03}/>
        </div>
      </div>
    </div>
  )
}
