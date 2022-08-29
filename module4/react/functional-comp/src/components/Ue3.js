import { useEffect, useState } from "react";

function Ue3(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("randomName");

    useEffect(()=>{
        document.title = `${count} ${name}`
    },[count,name]) // On Adding a Specific Value in an Array, The component will update only when that specific value is changed. 

    return(
        <>
            <h1>Name: {name}</h1>
            <button onClick={()=>{setName("Saurabh")}}>changeName</button>
            <h2>Count: {count}</h2>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
        </>
    )
}
export default Ue3