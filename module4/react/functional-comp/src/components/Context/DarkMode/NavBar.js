import { useContext, useDebugValue } from "react"
import ThemeChanger, { ThemeContext } from "./ThemeChanger"

function NavBar(){
    return(
        <div >
            <h1>NavBar</h1>
            <NavText/>
            <NavText/>
            <NavText/>
        </div>
    )
}

function NavText (){
    let CTheme = useContext(ThemeContext)
    return(
        <div className={CTheme == 'light'?'light':'dark'}>
            <h2>NavText</h2>
        </div>
    )
}
export default NavBar