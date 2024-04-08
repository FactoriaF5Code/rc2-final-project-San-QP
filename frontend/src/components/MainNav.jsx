import "../styles/MainNav.css";
import { BurgerMainNav } from "./BurgerMainNav";
import { useState } from "react";

export const MainNav = ({ textColor }) => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen)
  }

  return (
    <nav className="navigation">
        <ul className="mainNav">
            <li>
                <a href="#" className="mainNav_link" style={{ color: textColor, }}>SOBERANÍA ALIMENTARIA</a>
                <span className="separator" style={{ color: textColor }}>|</span>
            </li>
            <li>
                <a href="#" className="mainNav_link" style={{ color: textColor }}>SEMILLAS LIBRES</a>
            </li>
        </ul>
        <div className="burgerMenu" onClick={toggleBurgerMenu}>
          <BurgerMainNav />
        </div>
    </nav>
  )
}
