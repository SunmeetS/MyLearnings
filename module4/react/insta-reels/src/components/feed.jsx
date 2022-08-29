import React, { Component, useContext, useEffect, useState } from 'react';
import { Redirect, Routes, Route, Router, useHistory } from 'react-router-dom';
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import './feed.css'
import Profile from './Profile';
import VideoCard from './VideoCard';
import "./videoCard.css"
import { AuthContext } from './AuthContext';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

export default function Feed() {
    let user = useContext(AuthContext)
    let [posts, setPosts] = useState([])
        const history = useHistory()
    useEffect(async()=>{
        const querySnapshot = await getDocs(collection(db,"posts"))
        let arr = [];
        querySnapshot.forEach((doc)=>{
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, "=>", doc.data());
            arr.push({id : doc.id, ...doc.data()})
        });
        setPosts(arr)
        console.log(posts)
    },[]) 

    function redirectToProfile(){
        history.push('/profile')
    } /* Why is when I am doing the same in Profile as redirectToFeed it is loading flawlessly, here it is getting blank
     When Signing Out from Feed then also the Same issue. */ 
    return (
        <>
            <div className="header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="Image not available" className="instaImg" />
                <img onClick={(redirectToProfile)} src={require('../SunmeetSingh.jpeg')} alt="" className="profilePicture" />
                <button className="btn btn-outline-dark" onClick={() => { auth.signOut() ; }}>Sign Out</button>
            </div>
            <div className="mainContainer">

                
                <input style={{opacity:0, zIndex:"2"}}  className='reelsUploader' type="file" onClick={(e) => {
                    console.log(e)
                }}
                
                onChange={(e) => {
                    let videoObj = e.currentTarget.files[0];
                    console.log(videoObj)
                    let { name, size, type } = videoObj
                    console.log(size);
                    type = type.split("/")[0];
                    if (type !== "video") {
                        alert("Please upload a video");
                    } else {
                        let storageRef = ref(storage, `${name}`)
                        const uploadTask = uploadBytesResumable(storageRef, videoObj);
                        uploadTask.on('state_changed',
                            (snapshot) => {
                                // Observe state change events such as progress, pause, and resume
                                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                let progresss = `upload is  ${progress} % done` 
                                console.log('Upload is ' + progress + '% done');
                                let uploadProgress = document.createElement('h3');
                                uploadProgress.innerText = progresss

                                uploadProgress.appendChild(document.createElement('br'))
                                
                                setTimeout(() => {
                                    document.querySelector('.reelsContainer').appendChild(uploadProgress)
                                }, 600);
                                setTimeout(() => {
                                    document.querySelector('.reelsContainer').removeChild(uploadProgress)
                                }, 1000);
                                switch (snapshot.state) {
                                    case 'paused':
                                        console.log('Upload is paused');
                                        break;
                                    case 'running':
                                        console.log('Upload is running');
                                        break;
                                }
                            },
                            (error) => {
                                // Handle unsuccessful uploads
                            },
                            () => {
                                // Handle successful uploads on complete
                                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                                    console.log('File available at', downloadURL);
                                    console.log(user);

                                    await setDoc(doc(db,"posts",user.uid +`${name}`),{
                                        email : user.email,
                                        url : downloadURL,
                                        likes: [],
                                        comments: []
                                    })
                                });
                            }
                        );
                    }
                }}  
                />
                <i style={{position:"fixed", left:"1rem", top: "6rem", zIndex:'0'}} className="fa fa-upload btn btn-outline-dark" aria-hidden="true" > Upload the file</i>
                
                {/* <button className='btn btn-outline-dark' style={{position:"fixed", left:"1rem", top: "6rem", zIndex:'0'}}>Upload Your Reel</button> */}
                

                {/* <div className="uploadContainer">
                    Upload
                </div> */}
                <div className="reelsContainer">
                    {posts.map((post)=>{
                        return <VideoCard key={post.id} data = {post} />
                    })}
                </div>
            </div>
        </>
    )
}