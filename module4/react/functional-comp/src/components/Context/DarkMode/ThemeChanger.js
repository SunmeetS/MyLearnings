import React, { useState } from "react"
import Footer from "./Footer";
import NavBar from "./NavBar";
import '../DarkMode/theme.css'

export const ThemeContext = React.createContext('');

function ThemeChanger(){

    let [theme,setTheme] = useState('light');
    const handleTheme = ()=>{
        if(theme == 'light') setTheme('dark');
        else setTheme('light');
    }

    return(
        <ThemeContext.Provider value={theme}>
            <button onClick={handleTheme}>Change Theme</button>
            <NavBar/>
            <Footer/>
        </ThemeContext.Provider>
    )
}
export default ThemeChanger