import React, { Component, useContext }  from 'react';
import SignIn from './SignIn';
import './profile.css'
import { AuthContext } from './AuthContext';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Profile(){
    
    let cUser = useContext(AuthContext);

    useEffect(function fn(){
        (async function(){
            if(cUser){
                const docRef = doc(db,"users",cUser.uid)
                const docSnap = await getDoc(docRef);
                console.log("Document Data : ", docSnap)
                if(docSnap.exists()){
                    console.log(docSnap.data());
                }else{
                    console.log("No Data")  
                }
            }
        })()
    },[cUser])

    return (

        <>
            {cUser == null?<div>Need to Login</div>:
            <>
        <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346" className='instaImg' alt="" />
            <div className="main">
                <div className="pImgContainer">
                    <img src={require('../SunmeetSingh.jpeg')} alt="" className="pImg"></img>
                </div>
                <div className="details">
                    <div className="content">Sunmeet</div>
                    <div className="content">No. of Posts : <span className="boldText">Posts</span></div>
                    <div className="content">Email <span className="boldText">Email.com</span></div>
                </div>
            </div>
        </div>
        </>
            }
        </>

        
    )
}