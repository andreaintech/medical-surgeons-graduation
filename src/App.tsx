import { useState } from 'react';
import './App.css';
import { GuestbookAndPredictions } from './components/GuestbookAndPredictions';
import { Quiz } from './components/Quiz';
import { Timeline } from './components/Timeline';

type Tab = 'guestbook' | 'quiz' | 'timeline';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('guestbook');

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">
          <span className="app__title-icon">🎓</span>{' '}
          ¡Feliz Graduación, Doctora Fabiana!{' '}
          <span className="app__title-icon">💜</span>
        </h1>
        <p className="app__subtitle">Un regalo especial para celebrar tu logro</p>
      </header>

      <nav className="app__tabs">
        <button
          className={`app__tab ${activeTab === 'guestbook' ? 'app__tab--active' : ''}`}
          onClick={() => setActiveTab('guestbook')}
        >
          <span className="app__tab-icon">💌</span>{' '}
          Mensajes y Predicciones
        </button>
        <button
          className={`app__tab ${activeTab === 'quiz' ? 'app__tab--active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <span className="app__tab-icon">🧩</span>{' '}
          Quiz
        </button>
        <button
          className={`app__tab ${activeTab === 'timeline' ? 'app__tab--active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          <span className="app__tab-icon">📅</span>{' '}
          Línea de Tiempo
        </button>
      </nav>

      <main className="app__content">
        <div className={`app__panel ${activeTab === 'guestbook' ? 'app__panel--active' : ''}`}>
          <GuestbookAndPredictions />
        </div>
        <div className={`app__panel ${activeTab === 'quiz' ? 'app__panel--active' : ''}`}>
          <Quiz />
        </div>
        <div className={`app__panel ${activeTab === 'timeline' ? 'app__panel--active' : ''}`}>
          <Timeline />
        </div>
      </main>
    </div>
  );
}

export default App;
