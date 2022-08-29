import { async } from "@firebase/util";
import { reload } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "./AuthContext";


const VideoCard = (props) => {
    let [playing, setPlaying] = useState(false);
    let [commentBox, setCommentBox] = useState(false)
    let [currUserComment, setCurrUserComment] = useState("")
    let [comments, setComments] = useState([]);
    let [currUserLiked, setCurrUserLiked] = useState(false);

    let user = useContext(AuthContext)

    useEffect(async () => {
        let commentsIdArr = props.data.comments;
        let arr = [];
        for (let i = 0; i < commentsIdArr.length; i++) {
            const commentRef = doc(db, "comments", commentsIdArr[i]);
            const commentSnap = await getDoc(commentRef);
            arr.push(commentSnap.data());
        }
        console.log("Array", arr);
        setComments(arr);
        if (user) {
            let a = props.data.likes.includes(user.uid);
            setCurrUserLiked(a)
        }
    }, [props])

    console.log("props", props)
    return (

        <div className="videoCard">

            <div className="reelHeader">
                <img src={require('../SunmeetSingh.jpeg')} alt="" className="reelDp" />
                <h6 className="name">Sunmeet Singh</h6>
            </div>

            <video onClick={(e) => {
                if (playing) {
                    e.currentTarget.pause()
                    setPlaying(false);
                }
                else {
                    e.currentTarget.play()
                    setPlaying(true);
                }
            }} src={props.data.url} />

<span className="like"
                onClick={async () => {
                    let likesArr = props.data.likes;

                    if (currUserLiked) {
                        likesArr = likesArr.filter((el) => el != user.uid);
                    }
                    else {
                        likesArr.push(user.uid);
                    }
                    const postRef = doc(db, "posts", props.data.id);
                    await updateDoc(postRef, {
                        likes: likesArr
                    })
                    let c = !currUserLiked;
                    setCurrUserLiked(c)
                    console.log(currUserLiked)
                }}
            >{currUserLiked ? <i class="fa-solid fa-thumbs-down like"> </i> : <i class="fa-solid fa-thumbs-up like"></i>}
            </span>

            <span className="commentBox" onClick={(e) => {
                commentBox ? setCommentBox(false) : setCommentBox(true);
            }}>
                <br /> <i class="fa-solid fa-comment"></i>
                
                
            </span>
            {commentBox ? (
                <div className="videoCardCommentBox">
                    {comments.map((comment) => {
                        return (
                            <div className="comments">
                                {console.log("Comment",comment)}
                                <h6 >{comment.email} ={'>'}</h6> <h5>{comment.comment}</h5>
                            </div>
                        )
                    })}
                    <div className="commentForm">
                        <div className="postComment">
                            <input type="text" value={currUserComment} onChange={(e) => {
                                setCurrUserComment(e.currentTarget.value)
                            }} />
                            <button onClick={async () => {
                                let commentId = user.uid + "$" + Date.now();
                                await setDoc(doc(db, "comments", commentId), {
                                    email: user.email,
                                    comment: currUserComment,
                                });

                                if(currUserComment != ""){
                                    
                                    console.log("Comment 1 => ",currUserComment);
                                    let h3 = document.createElement('h3');
                                    h3.innerText = currUserComment
                                    document.querySelector('.commentBox').append(h3)

                                }

                                setCurrUserComment("");
                                let postCommentsArr = props.data.comments
                                postCommentsArr.push(commentId);
                                

                                const postRef = doc(db, "posts", props.data.id);
                                await updateDoc(postRef, {
                                    comments: postCommentsArr
                                })
                            }}>Post</button>

                            <button onClick={
                                async () => {
                                    let postCommentsArr = props.data.comments
                                    postCommentsArr.pop()
                                    const postRef = doc(db, "posts", props.data.id);
                                    await updateDoc(postRef,{
                                        comments: postCommentsArr
                                    })

                                    let parentDiv = document.querySelector('.videoCardCommentBox');
                                    let commentPost = document.querySelector('.postComment')
                                    
                                    // for (let i = 0; i < parentDiv.children.length; i++) {
                                    //     if(parentDiv.children[i] != commentPost ){
                                    //         parentDiv.remove(parentDiv.children[i])
                                    //         break
                                    //     }
                                    // }

                                    // console.log(postCommentsArr);
                                }

                            }>Delete Comment</button>

                        </div>
                    </div>
                </div>
                
            ) : ("")}
            
        </div>


    )
}

export default VideoCard