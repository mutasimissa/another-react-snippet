import { useTranslation } from "react-i18next";
import reactLogo from "../assets/react.svg";

export const MeetTheTeam = () => {
  const { t: trasnlate } = useTranslation();
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{trasnlate("hello")}</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      {import.meta.env.PACKAGE_VERSION}
      </p>
    </div>
  );
};