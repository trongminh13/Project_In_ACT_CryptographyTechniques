import React from 'react';
import logo from './logo.svg';
import style from './heading.module.css'
import './App.css';
import Appcss from 'classnames'

function App() {
  const attributeValue = "header"
  return (
    <div className="App">
   <h1 className= {style.heading}>HELLO ỬOD</h1>
   <h1  className= {style.pragraph}>HELLO ỬOD</h1>
   

    </div>
  );
}

//nemong leak

// border: 10px solid red;
function Header(props:any){
  const {att}=props;
  const {mycolor}=props
  const {mywidth}=props
  const {myheight}=props
  const {myboder}=props
  return(
/*<h1 className={att}>hellllll3o</h1>*/
/*<h1 style={{color : mycolor }}>hellllll3o</h1>*/
/*{ <h1 style={{width : mywidth}}>hellllll3o</h1> }*/
<h1 style={{width : mywidth, height : myheight, background :mycolor}}>hinh chu nhat</h1>
  )
}
export default App;
