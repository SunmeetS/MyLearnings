import Children from "./Children"
import React from "react"


function Parent(){
    console.log('rendered Parent')
    return (
        <>
            <p>I am a Parent</p>
            <Children/>
        </>
    )
}

export default React.memo(Parent)