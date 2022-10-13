import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthState from './context/Auth/AuthState';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <AuthState>
            <App />
        </AuthState>
    </>
);
reportWebVitals();
