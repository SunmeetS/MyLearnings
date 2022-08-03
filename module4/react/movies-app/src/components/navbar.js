import { Component } from "react";

class NavBar extends Component{
    render(){
        return(
            <div style={{display:"flex",justifyContent:"spaceBetween"}}>
                <h1 style={{marginLeft:"4rem"}}>Movies App</h1>
                <h1 style={{marginLeft:"50rem"}}>Favorites</h1 >
            </div> // 
        )
    }
}

export default NavBar