import { useCounter, SHARED_APP_CONFIG, getGreeting } from '@shared/core';

export default function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  const greeting = getGreeting('Web Developer');

  return (
    <div className="app-container">
      <header>
        <span className="badge">Web Application</span>
        <h1>Bun Monorepo Showcase</h1>
        <p className="subtitle">
          Demonstrating zero-overhead code sharing between React Web and React Native using workspaces.
        </p>
      </header>

      <main className="dashboard-grid">
        {/* Card 1: Shared State Hook */}
        <section className="card">
          <h2 className="card-title">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--primary)' }}
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Shared Counter State Hook
          </h2>
          <p className="card-description">
            This card uses the custom <code>useCounter</code> hook declared inside <code>packages/shared</code>. 
            The identical hook and state engine will be reused on the React Native mobile app!
          </p>

          <div className="counter-container">
            <span className="counter-value">{count}</span>
            <div className="button-group">
              <button className="secondary" onClick={decrement}>
                - Decrement
              </button>
              <button className="primary" onClick={increment}>
                + Increment
              </button>
            </div>
            <button className="outline" onClick={reset} style={{ width: '100%' }}>
              Reset State
            </button>
          </div>
        </section>

        {/* Card 2: Shared Config & Utils */}
        <section className="card">
          <h2 className="card-title">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--secondary)' }}
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Shared Configuration & Utils
          </h2>
          <p className="card-description">
            Config, constants, and utilities are loaded statically from the monorepo root workspaces. 
            Any edits made to these configs update both platforms instantly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="config-item">
              <span className="config-label">Monorepo App Name</span>
              <span className="config-value">{SHARED_APP_CONFIG.appName}</span>
            </div>
            <div className="config-item">
              <span className="config-label">API version</span>
              <span className="config-value pill">{SHARED_APP_CONFIG.apiVersion}</span>
            </div>
            <div className="config-item">
              <span className="config-label">Theme Color Accent</span>
              <span className="config-value" style={{ color: SHARED_APP_CONFIG.themeColor }}>
                {SHARED_APP_CONFIG.themeColor}
              </span>
            </div>
          </div>

          <div className="greeting-box">
            <h4>Function Output:</h4>
            <p style={{ marginTop: '0.5rem', color: '#9ca3af' }}>{greeting}</p>
          </div>
        </section>
      </main>

      <footer>
        <p>Built with Bun Workspaces, Vite, React & React Native</p>
      </footer>
    </div>
  );
}
