import React, { Component, useContext, useState } from 'react';
import SignIn from './SignIn';
import './profile.css'
import { AuthContext } from './AuthContext';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { reload, signOut } from 'firebase/auth';
import Feed from './feed';
import { Redirect, Route, useHistory } from 'react-router-dom';


export default function Profile() {

    const [uId, setUId] = useState(undefined);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const history = useHistory()

    let cUser = useContext(AuthContext);        

    useEffect(
        function fn() {
            (async function () {
                if (cUser) {
                    const docRef = doc(db, "users", cUser.uid)
                    const userObj = await getDoc(docRef)
                    console.log("Document Data : ", userObj);
                    setUser(userObj.data());
                    setLoading(false);
                }
            })()
        }, [])

    async function logOut() {
        await signOut(auth);
        setUId(undefined);
        setUser(null);
    }

    function redirectToFeed(){
        history.push('/feed');
    }

    return (
        <>
        {/* {auth.signOut()} */}
            {loading ? <div  onClick={auth.signOut}>...Loading </div>  :
                <>

                    <div
                        className="header"> <button style={{textAlign: "end"}} className='btn btn-outline-dark logOut' onClick={()=>{logOut()}}>Log out</button>
                    </div>
                        
                    <div className="main">
                        <div className="pimgContainer">
                            <img /*src={user.profileImgUrl}*/ src={require('../SunmeetSingh.jpeg')} className="pimg" />
                        </div>
                        <div className="details">
                            <div className="content">{user.name}</div>
                            <div className="content">No of Posts: {user.reelsIds.length} </div>
                            <div className="content">{user.email}</div>
                        </div>
                    </div>

                    <div className="redirectToFeedDiv">
                        <h4>Nothing much to see here, <br /> Headover to Feed for Reels :)</h4>
                        <button className='btn btn-outline-success redirectToFeed' onClick={redirectToFeed}>Redirect to Feed</button>
                    </div>
                </>}
        </>
    )
}