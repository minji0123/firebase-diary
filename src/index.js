/* eslint-disable*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'normalize.css'
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

/**
 * index.js 로 이동하여 루트 컴포넌트인 <App/>을  Context로 감싸 
 * 하위에 있는 어떤 컴포넌트에서든 Context 정보에 접근 할 수 있도록
 */