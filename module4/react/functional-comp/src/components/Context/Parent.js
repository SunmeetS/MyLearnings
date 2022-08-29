import React, { useState } from "react";
import ChildA from "./ChildA";

function Parent(){
    const [firstName, setFirstName] = useState("Sunmeet");
    const [lastName, setLastName] = useState('Singh');
    
    return(
        <>
            <ChildA firstName = {firstName} lastName = {lastName} />
        </>
    )   
}
export default Parent;