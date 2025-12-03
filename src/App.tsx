import { useState, useEffect } from 'react';
import './App.css';
import { GuestbookAndPredictions } from './components/GuestbookAndPredictions';
import { Quiz } from './components/Quiz';
import { Timeline } from './components/Timeline';
import { studentThemes, type Student } from './theme';
import groupPhoto from './assets/home/group.jpg';

type Module = 'guestbook' | 'quiz' | 'timeline';

function App() {
  const [activeStudent, setActiveStudent] = useState<Student>('fabiana');
  const [activeModule, setActiveModule] = useState<Module>('guestbook');
  const theme = studentThemes[activeStudent];

  // Update CSS variables when student changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-primary-light', theme.primaryLight);
    root.style.setProperty('--theme-primary-dark', theme.primaryDark);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-secondary-light', theme.secondaryLight);
    root.style.setProperty('--theme-secondary-dark', theme.secondaryDark);
    root.style.setProperty('--theme-gradient-primary', theme.gradientPrimary);
    root.style.setProperty('--theme-gradient-secondary', theme.gradientSecondary);
    root.style.setProperty('--theme-gradient-mixed', theme.gradientMixed);
    root.style.setProperty('--theme-gradient-soft', theme.gradientSoft);
  }, [theme]);

  const isDoctor = activeStudent !== 'josmar';
  const title = isDoctor
    ? `¡Feliz Graduación, Doctora ${theme.name}!`
    : `¡Feliz Graduación, Doctor ${theme.name}!`;

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-content">
          <h1 className="app__title">
            <span className="app__title-icon">🎓</span>{' '}
            {title}{' '}
            <span className="app__title-icon">{theme.emoji}</span>
          </h1>
          <p className="app__subtitle">Un regalo especial para celebrar tu logro</p>
          <div className="app__group-photo-wrapper">
            <img
              src={groupPhoto}
              alt="Grupo de graduados"
              className="app__group-photo"
            />
          </div>
        </div>
      </header>

      <nav className="app__student-tabs">
        {(Object.keys(studentThemes) as Student[]).map((student) => {
          const studentTheme = studentThemes[student];
          return (
            <button
              key={student}
              className={`app__student-tab ${activeStudent === student ? 'app__student-tab--active' : ''}`}
              onClick={() => {
                setActiveStudent(student);
                setActiveModule('guestbook');
              }}
            >
              <span className="app__student-tab-icon">{studentTheme.emoji}</span>{' '}
              {studentTheme.name}
            </button>
          );
        })}
      </nav>

      <nav className="app__module-tabs">
        <button
          className={`app__module-tab ${activeModule === 'guestbook' ? 'app__module-tab--active' : ''}`}
          onClick={() => setActiveModule('guestbook')}
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
          <Quiz />
        </div>
        <div className={`app__panel ${activeModule === 'timeline' ? 'app__panel--active' : ''}`}>
          <Timeline />
        </div>
      </main>
    </div>
  );
}

export default App;
