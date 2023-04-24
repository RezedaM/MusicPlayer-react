export default function SidebarItem({sidebarImage}) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        <img
          className="sidebar__img"
          src={sidebarImage}
          alt="day's playlist"
        />
      </a>
    </div>
  )
}
