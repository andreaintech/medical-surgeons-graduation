import { useState } from 'react';
import './App.css';
import { GuestbookAndPredictions } from './components/GuestbookAndPredictions';
import { Quiz } from './components/Quiz';
import { Timeline } from './components/Timeline';
import { Home } from './components/Home';
import { studentThemes, type Student } from './theme';
import { useStudent } from './hooks/useStudent';

type Module = 'guestbook' | 'quiz' | 'timeline';

function App() {
  const { activeStudent, setActiveStudent, graduationTitle, emoji } = useStudent();
  const [activeModule, setActiveModule] = useState<Module>('timeline');

  // Show home page when no student is selected
  if (activeStudent === null) {
    return (
      <div className="app">
        <div className="app__navigation">
          <nav className="app__home-nav">
            <button
              className="app__home-button app__home-button--active"
              disabled
            >
              Inicio
            </button>
          </nav>
          <nav className="app__student-tabs">
            {(Object.keys(studentThemes) as Student[]).map((student) => {
              const studentTheme = studentThemes[student];
              return (
                <button
                  key={student}
                  className="app__student-tab"
                  onClick={() => {
                    setActiveStudent(student);
                    setActiveModule('timeline');
                  }}
                >
                  <span className="app__student-tab-icon">{studentTheme.emoji}</span>{' '}
                  {studentTheme.name}
                </button>
              );
            })}
          </nav>
        </div>
        <Home />
      </div>
    );
  }

  // Show student-specific content when a student is selected
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-content">
          <h1 className="app__title">
            <span className="app__title-icon">🎓</span>{' '}
            {graduationTitle}{' '}
            <span className="app__title-icon">{emoji}</span>
          </h1>
          <p className="app__subtitle">Un regalo especial para celebrar tu logro 🏅</p>
        </div>
      </header>

      <div className="app__navigation">
        <nav className="app__home-nav">
          <button
            className="app__home-button"
            onClick={() => setActiveStudent(null)}
          >
            Inicio
          </button>
        </nav>
        <nav className="app__student-tabs">
          {(Object.keys(studentThemes) as Student[]).map((student) => {
            const studentTheme = studentThemes[student];
            return (
              <button
                key={student}
                className={`app__student-tab ${activeStudent === student ? 'app__student-tab--active' : ''}`}
                onClick={() => {
                  setActiveStudent(student);
                  setActiveModule('timeline');
                }}
              >
                <span className="app__student-tab-icon">{studentTheme.emoji}</span>{' '}
                {studentTheme.name}
              </button>
            );
          })}
        </nav>
      </div>

      <nav className="app__module-tabs">
        <button
          className={`app__module-tab ${activeModule === 'guestbook' ? 'app__module-tab--active' : ''}`}
          onClick={() => setActiveModule('guestbook')}
          disabled
        >
          <span className="app__module-tab-icon">💌</span>{' '}
          Mensajes y Predicciones
        </button>
        <button
          className={`app__module-tab ${activeModule === 'quiz' ? 'app__module-tab--active' : ''}`}
          onClick={() => setActiveModule('quiz')}
        >
          <span className="app__module-tab-icon">🧩</span>{' '}
          Quiz
        </button>
        <button
          className={`app__module-tab ${activeModule === 'timeline' ? 'app__module-tab--active' : ''}`}
          onClick={() => setActiveModule('timeline')}
        >
          <span className="app__module-tab-icon">📅</span>{' '}
          Línea de Tiempo
        </button>
      </nav>

      <main className="app__content">
        <div className={`app__panel ${activeModule === 'guestbook' ? 'app__panel--active' : ''}`}>
          <GuestbookAndPredictions />
        </div>
        <div className={`app__panel ${activeModule === 'quiz' ? 'app__panel--active' : ''}`}>
          <Quiz key={activeStudent} />
        </div>
        <div className={`app__panel ${activeModule === 'timeline' ? 'app__panel--active' : ''}`}>
          <Timeline />
        </div>
      </main>
    </div>
  );
}

export default App;
