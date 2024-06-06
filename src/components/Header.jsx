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

  const options = [
    {
      label: "Home",
      linkTo: "Home",
    },
    {
      label: "Sobre Mim",
      linkTo: "AboutMeSection",
    },
    {
      label: "Meus Projetos",
      linkTo: "ProjectsSection",
    },
    {
      label: "Contato",
      linkTo: "ContactMe",
    },
  ];

  return (
    <header className="header">
      <Logo />
      <div className="nav-container">
        <nav>
          <ul className={menuOpen ? "menuOpen" : "menuClose"}>
            {options.map((option,_) => (
              <li key={_}>
                <Link 
                  spy={true}
                  smooth={true}
                  to={option.linkTo}
                  activeClass="active"
                  duration={500}
                >
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeModeBtn />
        <Hamburger onToggle={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
