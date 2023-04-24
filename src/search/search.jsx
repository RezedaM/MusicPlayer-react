export default function Search(props) {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        {/* <use xlink:href="img/icon/sprite.svg#icon-search"></use> */}
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
        {' '}
      
    </div>
  )
}
