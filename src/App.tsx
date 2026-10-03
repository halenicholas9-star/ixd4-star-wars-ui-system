export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="wordmark" href="#main" aria-label="IXD4 Star Wars UI System home">
          IXD4 <span>/ STAR WARS</span>
        </a>
        <span className="version">UI SYSTEM · V0.1</span>
      </header>
      <main id="main">
        <p className="eyebrow">A galaxy of interfaces</p>
        <h1>Star Wars<br /><span>UI System.</span></h1>
        <p className="intro">
          A shared foundation for the IXD4 Star Wars design system.
          Built to bring consistency to every screen, component, and interaction.
        </p>
        <div className="foundation-status">
          <span className="status-dot" aria-hidden="true" />
          <p>Foundation initialized <span>React · TypeScript · Vite</span></p>
        </div>
      </main>
      <footer>IXD4 DESIGN SYSTEM <span>FOUNDATION / 001</span></footer>
    </div>
  )
}
