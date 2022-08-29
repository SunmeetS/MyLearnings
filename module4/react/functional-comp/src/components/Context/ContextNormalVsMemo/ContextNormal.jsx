import { createContext, useContext } from "react";
import { useState } from "react";
const Context = createContext('');

export default function ContextNormal (){
    const [message,setMessage] = useState("Fake Message");
    console.log('rendered ContextNormal')
    return(
        <>
            <h1>Context Normal</h1>
            <button onClick={()=>{setMessage('Real Message')}}>Change Message</button>
            <Context.Provider value={message}>
                <Parent/>
            </Context.Provider>
        </>
    )   
}

function Parent(){
    console.log('rendered Parent')
    return (
        <>
            <p>I am a Parent</p>
            <Children/>
        </>
    )
}

function Children(){
    console.log('rendered Children')
    return (
        <>
            <p>I am a Child</p>
            <GrandChildren></GrandChildren>
        </>
    )
}

function GrandChildren(){
    console.log('rendered Grand children')
    let message = useContext (Context)
    return (
        <>
            <p>I am a GrandChild</p>
            <h1>God sent this {message}</h1>
        </>
    )
}

// export default ContextNormal