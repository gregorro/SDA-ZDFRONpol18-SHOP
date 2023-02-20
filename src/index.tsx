import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCtEIRZVzG4DwlE6pxFRQbRdVTNaYbtgg",
  authDomain: "zdfronpol18-sdanews-3f22a.firebaseapp.com",
  projectId: "zdfronpol18-sdanews-3f22a",
  storageBucket: "zdfronpol18-sdanews-3f22a.appspot.com",
  messagingSenderId: "78839870204",
  appId: "1:78839870204:web:8b49aca9f2cf76e6b75d79"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
