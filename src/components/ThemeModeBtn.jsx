import "../styles/ThemeModeBtn.css";

const ThemeModeBtn = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    document
      .querySelector(".darkmode_icon")
      .setAttribute(
        "src",
        "external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons 1.svg"
      );
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    document
      .querySelector(".darkmode_icon")
      .setAttribute(
        "src",
        "external-sun-lighting-flaticons-flat-flat-icons 1.svg"
      );
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        type="checkbox"
        className="dark_mode_input"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_toogle" htmlFor="darkmode-toggle">
        <img
          src="./external-sun-lighting-flaticons-flat-flat-icons 1.svg"
          className="darkmode_icon"
        />
      </label>
    </div>
  );
};

export default ThemeModeBtn;
