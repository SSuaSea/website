import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';

//스토어 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter basename={process.env.PUBLIC_URL}>
        <App />
    </HashRouter>
    
    {/* </BrowserRouter> */}
  </React.StrictMode>
);


reportWebVitals();
