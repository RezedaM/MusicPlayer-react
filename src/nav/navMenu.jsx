

export default function NavMenu({ items, active}) {
  return (
    <div className="nav__menu menu">
      <ul className={active ? 'menu__list active' : 'menu__list'}>


        {items.map((item) => (
          <li className="menu__item" key={item.id}>
            <a href={item.href}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
