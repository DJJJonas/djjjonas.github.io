import "./App.css";

function App() {
  return (
    <section>
      <div className="intro">
        <h1>Jonas de Melo</h1>
        <p>Full Stack Web Developer</p>
      </div>

      <div className="projects">
        <h2>Projetos</h2>
        <div className="projects__items">
          <a
            href="http://djjjonas.github.io/toaxt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/toaxt.portfolio.png"
              alt="toaxt"
              width="200"
            />
          </a>
          <a
            href="http://djjjonas.github.io/pokedex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/pokedex.portfolio.png"
              alt="pokedex"
              width="200"
            />
          </a>
          <a
            href="http://djjjonas.github.io/quick-html-icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/quick-html-icons.portfolio.png"
              alt="quick-html-icons"
              width="200"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
