import React, { Component, useContext }  from 'react';
import SignIn from './SignIn';
import './profile.css'
import { AuthContext } from './AuthContext';

export default function Profile(){
    
    let cUser = useContext(AuthContext);

    return (

        <>
            {cUser == null?<div>Need to Login</div>:
            <div>Logged In User is {cUser.uid}</div>
            }
        </>

        // <>
        // <div className="header">
        // <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346" className='instaImg' alt="" />
        //     <div className="main">
        //         <div className="pImgContainer">
        //             <img src={require('../SunmeetSingh.jpeg')} alt="" className="pImg"></img>
        //         </div>
        //         <div className="details">
        //             <div className="content">Sunmeet</div>
        //             <div className="content">No. of Posts : <span className="boldText">Posts</span></div>
        //             <div className="content">Email <span className="boldText">Email.com</span></div>
        //         </div>
        //     </div>
        // </div>
        // </>
    )
}