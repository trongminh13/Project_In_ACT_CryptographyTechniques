import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App4 from './App4';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

{/* <App1 />
        <App1 size1/>
        <App1 size2/>
        <App1 size1 color1/>
        <App1 size2 color2/>
  </React.StrictMode> */}
  <App2 />
        {/* <App1 size1/> */}

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
