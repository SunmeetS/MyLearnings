import { createContext, useContext } from "react";
import { useState } from "react";
import Parent from "./Parent";
export const Context = createContext('');

export default function ContextMemo (){
    const [message,setMessage] = useState("Fake Message");
    console.log('rendered ContextNormal')
    return(
        <>
            <h1>Context Memo</h1>
            <button onClick={()=>{setMessage('Real Message')}}>Change Message</button>
            <Context.Provider value={message}>
                <Parent/>
            </Context.Provider>
        </>
    )   
} 