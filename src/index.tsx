import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import "./styles/base.css"
import "./styles/index.less"
import App from './App';

// 导入store
import store from './store'
// 导入store提供组件Provider
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

