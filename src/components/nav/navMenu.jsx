import styles from '../nav/navMenu.module.css'

export default function NavMenu({ items, active }) {
  return (
    <div className={styles.nav__menu}>
      <ul
        className={`${
          active
            ? [styles.menu__list, styles.active].join(' ')
            : styles.menu__list
        }`}
      >
        {items.map((item) => (
          <li className={styles.menu__item} key={item.id}>
            <a href={item.href} className={styles.menu__link}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
