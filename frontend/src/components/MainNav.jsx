import "../styles/MainNav.css";

export const MainNav = () => {
  return (
    <nav>
        <ul className="mainNav">
            <li>
                <a href="#" className="mainNav_link">SOBERANÍA ALIMENTARIA</a>
                <span className="separator">|</span>
            </li>
            <li>
                <a href="#" className="mainNav_link">SEMILLAS LIBRES</a>
            </li>
        </ul>
    </nav>
  )
}
