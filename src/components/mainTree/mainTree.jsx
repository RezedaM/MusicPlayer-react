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
import styles from '../mainTree/mainTree.module.css'

// const items = [
//   { value: 'Главное', href: 'link', id: 1 },
//   { value: 'Мой плейлист', href: 'link', id: 1 },
//   { value: 'Войти', href: 'link', id: 1 },
// ]

export default function MainTree() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Burger />
          <CenterBlock />
          <Sidebar />
        </main>
        <div className={styles.bar}>
          <Bar />
        </div>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  )
}
