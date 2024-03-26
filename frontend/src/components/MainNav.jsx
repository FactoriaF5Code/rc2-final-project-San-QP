import "../styles/MainNav.css";

export const MainNav = ({ textColor, backgroundColor }) => {
  return (
    <nav>
        <ul className="mainNav">
            <li>
                <a href="#" className="mainNav_link" style={{ color: textColor, }}>SOBERANÍA ALIMENTARIA</a>
                <span className="separator" style={{ color: textColor }}>|</span>
            </li>
            <li>
                <a href="#" className="mainNav_link" style={{ color: textColor }}>SEMILLAS LIBRES</a>
            </li>
        </ul>
    </nav>
  )
}
