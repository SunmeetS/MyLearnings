import {useEffect, useState} from "react";

function Ue2(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("Sunmeet");

    useEffect(()=>{
        document.title = `This is my title ${name} ${count}`
    },[]) // Passing an empty array makes the useEffect work like componentDidMount, Else if we don't pass the array, it will work like the combination of componentDidMount and componentDidUpdate

    return(
        <div>
            <h1>This is a Counter {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <h1>Name: {name}</h1>
            <input onKeyDown={(e)=>e.key = 'enter'? setName(document.querySelector("input").value):''}/>

        </div>
    )
}
export default Ue2