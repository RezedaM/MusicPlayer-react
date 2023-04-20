import Search from '../search/search'
import Filter from '../filter-by/filter'
import TrackList from '../tracklist/tracklist'
import Track from '../tracklist/track'

export default function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <TrackList />
    </div>
  )
}
