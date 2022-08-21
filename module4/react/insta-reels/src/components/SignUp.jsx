import React, { useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

export default function SignUp() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false);
    const [user, setUser] = useState(null);
    
    async function createUser() {
        
        try {
            setLoader(true);
            let userCred = await createUserWithEmailAndPassword(auth,email,password)
            setUser(userCred.user)
        }
        catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError("")
            }, 2000);
        }
        setLoader(false);
    }

    return (
        <>
            {
                error != ""?<h1>{error}</h1>
            :   loader ?    <h1>Loading...</h1>
            :   user != null? <h1>{userName} {user.uid} </h1>
            :   <>
                    <input onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder="Enter Email" />
                    <br />
                    <input onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' type="password" />
                    <br />
                    <input onChange={(e) => { setUserName(e.target.value) }} placeholder="Enter Username" />
                    <br />
                    <br />
                    <button onClick={createUser} >Create Account</button>
                </>
            }
        </>
    )
} 