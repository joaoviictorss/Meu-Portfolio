import "../styles/Header.css";
import Logo from "./Logo";
import ThemeModeBtn from "./ThemeModeBtn";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <header className="header">
      <Logo />
      <div className="nav-container">
        <nav>
          <ul className={menuOpen ? "menuOpen" : "menuClose"}>
            <li>
              <Link
                spy={true}
                smooth={true}
                to="Home"
                activeClass="active"
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                activeClass="active"
                to="AboutMeSection"
                duration={500}
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                to="ProjectsSection"
                activeClass="active"
                duration={500}
              >
                Meus Projetos
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                to="ContactMe"
                activeClass="active"
                duration={500}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeModeBtn />
        <Hamburger onToggle={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
