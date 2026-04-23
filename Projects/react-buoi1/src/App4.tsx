import React, { useState } from 'react';
import logo from './logo.svg';
import style from './heading.module.css'
import './App.css';
import Appcss from 'classnames'
import Content from "./learn_hooks/useContent/Content";
import { createContext } from 'react';

export const ThemeContext =createContext<any>(null);
function App4() {
  // const attributeValue = "header"
  const [theme, settheme] = useState("dark");
  const toggleTheme = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className="text-center items-center mt-6">

        <button className="text-white hover:gb-blue-800 text-sm px-4 py-2" onClick={toggleTheme}>
          togggg
        </button>
      <Content/>
    </div>
   </ThemeContext.Provider>
  );
}
export default App4;
