import React, { useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../firebase'
import { doc, setDoc } from "firebase/firestore";
import './signIn.css'

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
            await setDoc(doc(db, "users", userCred.user.uid), {
                email,
                userName,
                reelsIds:[],
                profileImgUrl:"",
                userIds:userCred.user.uid
              });
              console.log(userCred.user)
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
            :   <div style={{marginTop:"23vh"}} className="signInForm">
                    <input onChange={(e) => { setEmail(e.target.value) }} className="form-control" type='email' placeholder="Enter Email" />
                    <br />
                    <input onChange={(e) => { setPassword(e.target.value) }}className="form-control"  placeholder='Enter Password' type="password" />
                    <br />
                    <input onChange={(e) => { setUserName(e.target.value) }}className="form-control" placeholder="Enter Username" />
                    <br />
                    <input type="file" className="pImgUploader" />
                    <br />
                    <br />
                    <button onClick={createUser} className="btn btn-outline-dark createAccount" >Create Account</button>
                </div>
            }
        </>
    )
}