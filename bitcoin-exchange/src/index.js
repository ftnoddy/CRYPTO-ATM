import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthContextProvider>
      <ToastContainer />
      <App />
    </AuthContextProvider>
  </>
);

reportWebVitals();
