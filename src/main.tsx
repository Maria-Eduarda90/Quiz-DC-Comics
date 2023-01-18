import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { QuizProvider } from './context/QuizContext';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
)
