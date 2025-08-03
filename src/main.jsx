import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ExpenseFlowApp from './ExpenseFlowApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseFlowApp />
  </StrictMode>
);
