import React, { useContext } from "react"
import { ThemeContext } from "./ThemeChanger"

function Footer(){
    return(
        <div>
        <h1>Footer</h1>
        <FooterText/>
        <FooterText/>
        <FooterText/>
        </div>
    )
}
export default Footer

function FooterText () {
    let CTheme = useContext(ThemeContext)
    return(
        <div className={CTheme == 'light'?'light':'dark'}>
            <h2 >Footer Text</h2>
        </div>
    )
}