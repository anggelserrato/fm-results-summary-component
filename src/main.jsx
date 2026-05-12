import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ResultsSummary from './components/ResultsSummary';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResultsSummary />
  </StrictMode>
);
