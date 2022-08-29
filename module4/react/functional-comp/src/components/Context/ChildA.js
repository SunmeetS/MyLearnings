import React from "react";
import ChildB from "./ChildB";
// import Parent from "./Parent";   

function ChildA({firstName,lastName}){
    return(
        <>
            <h1>This is Child A and It's Children B</h1>
            <ChildB fName = {firstName} lName = {lastName}/>
        </>
    )
}
export default ChildA
