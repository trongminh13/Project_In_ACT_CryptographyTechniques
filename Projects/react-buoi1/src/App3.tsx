import React from 'react';
import logo from './logo.svg';
import style from './heading.module.css'
import './App.css';
import Appcss from 'classnames'

function List({data,children}:any) {
  return (
  
   <ul>
    {data.map((item:any)=>children(item))}
   </ul>
  );
}

//nemong leak

// border: 10px solid red;
function App() {
  const attributeValue = "header"
  return (
    <div className="App">
   <h1 className= {style.heading}>HELLO ỬOD</h1>
   <h1  className= {style.pragraph}>HELLO ỬOD</h1>
   

    </div>
  );
}
export default App;
