import Search from '../search/search'
import Filter from '../filter-by/filter'
import TrackList from '../tracklist/tracklist'
import Track from '../tracklist/track'

export default function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <label className="filter__title">Искать по:</label>
        <Filter
          options={[
            { value: 'Michael Jackson' },
            { value: 'Frank Sinatra' },
            { value: 'Calvin Harris' },
            { value: 'Zhu' },
            { value: 'Arctic Monkeys' },
          ]}
          optName={'исполнителю'}
        />
        <Filter
          options={[
            { value: 'Хип-хоп' },
            { value: 'Рок' },
            { value: 'Поп-музыка' },
            { value: 'Техно' },
            { value: 'Инди' },
          ]}
          optName={'жанру'}
        />
        <Filter
          options={[{ value: 'Более новые' }, { value: 'Более старые' }]}
          optName={'году выпуска'}
        />
      </div>

      <TrackList />
    </div>
  )
}
