import "./App.css";
import Dictionary from "./Dictionary";
import Icon from "./Icon.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={Icon}
            className="App-logo img-fluid"
            alt="logo"
            width={150}
          />
        </header>
        <main>
          <Dictionary defaultKeyword="food" />
        </main>
        <footer className="App-footer">
          <small>
            This Project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/priyanka-ganesh-950629206/"
              target="_blank"
              rel="noreferrer"
            >
              Priyanka
            </a>{" "}
            and is{" "}
            <a href="https://github.com/PSK76" target="_blank" rel="noreferrer">
              Open-Sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://peaceful-allen-df626a.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
