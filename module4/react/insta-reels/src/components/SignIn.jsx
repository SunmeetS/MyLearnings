import React, { useEffect, useState } from "react";
import { auth, db } from '../firebase'
import {signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import "./signIn.css"
import { useHistory } from "react-router-dom";


export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [uId, setUId] = useState(undefined);
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");

    function changeEmail(e) {
        setEmail(e.target.value)
    }

    function changePassword(e) {
        setPassword(e.target.value)
    }

    async function showCredentials() {
        try {
            setLoader(true)
            let userCred = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCred.user)
            setUId(userCred.user.uid)

        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError("")
            }, 10000)
        }
        setLoader(false);

        // document.querySelector('body').appendChild(document.createElement('h1')).textContent = <h1>abc</h1>

    }

    async function logOut() {
        await signOut(auth);
        setUId(undefined);
        setUser(null);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
              setUser(user);
              setUId(user.uid)
              // ...
            } else {
              // User is signed out
              // ...
              setUser(null);
            }
        })
    },[])

    return (
        <div style={{marginTop:"35vh"}}>
            {
                    error != "" ? <h1 style={{textAlign: "center"}}>{error} </h1> :
                        loader == true ? <h1 style={{textAlign: "center"}}>...Loading</h1> :
                            uId ?
                                <>
                                    <h1>{uId}</h1>
                                    <button className="btn btn-outline-dark" onClick={logOut}>Sign Out</button>
                                </>
                                :
                                <div className="signInForm">
                                    <input onChange={changeEmail} type={email} placeholder="Enter Email" className="form-control email"></input>
                                    <br></br>
                                    <input onChange={changePassword} placeholder="Enter Password" type="password" className="form-control password"></input>
                                    <br></br>
                                    <input onClick={() => { showCredentials() }} type={"button"} value="verify" className="btn btn-outline-dark"></input>
                                </div>
            }
        </div>
    )
}

