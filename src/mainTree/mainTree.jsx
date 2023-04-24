import BarPlayer from '../bar/barPlayer'
import BarVolume from '../bar/barVolume'
import Bar from '../bar/bar'
import Sidebar from '../sidebar/sidebar'
import Burger from '../nav/burger'
import CenterBlock from '../centerBlock/centerblock'
import Track from '../tracklist/track'
import TrackList from '../tracklist/tracklist'
import Filter from '../filter-by/filter'
import Search from '../search/search'
import NavMenu from '../nav/navMenu'
import Personal from '../sidebar/personal'
import SidebarItem from '../sidebar/sidebarItem'

// const items = [
//   { value: 'Главное', href: 'link', id: 1 },
//   { value: 'Мой плейлист', href: 'link', id: 1 },
//   { value: 'Войти', href: 'link', id: 1 },
// ]

export default function MainTree() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Burger />
          <CenterBlock />
          <Sidebar />
        </main>
        <div className="bar">
          <Bar />
        </div>
        <footer className="footer"></footer>
      </div>
    </div>
  )
}
