import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Updated for React 18+
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.min.js';


const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ React 18 way
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: register for offline support
serviceWorker.unregister();
