import useLocalStroage from "./useLocalStorage";
import "./index.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStroage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>나는야 성민석</p>
        <button onClick={handleToggleTheme}>모드 변경</button>
      </div>
    </div>
  );
}
