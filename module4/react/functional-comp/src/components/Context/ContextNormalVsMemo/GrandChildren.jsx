import { useContext } from "react"
import {Context} from "./ContextMemo"
  


function GrandChildren(){
    console.log('rendered Grand children')
    let message = useContext(Context)
    return (
        <>
            <p>I am a GrandChild</p>
            <h1>God sent this {message}</h1>
        </>
    )
}

export default GrandChildren