import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { SlLike } from "react-icons/sl";    

const ShowPosts = ({ posts, setPosts }) => {
    const [likecount,setlikecount]=useState(0);
    const deletePost = (index) => {
        const updatedPosts = posts.filter((_, i) => i !== index);
        setPosts(updatedPosts);
    };

    const like=()=>{
        
        setlikecount(likecount+1)
        

    }

    return (
        <div className='container m-5'>
            {posts.length !== 0 ? (
                posts.map((post, index) => (
                    <div key={index} className="card" style={{ width: '18rem', marginBottom: '20px' }}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.description}</p>
                            <MdDelete onClick={() => deletePost(index)} />
                            <SlLike onClick={()=>like()}/>{likecount}
                        </div>
                    </div>
                ))
            ) : (
                <h1>No Posts Yet</h1>
            )}
        </div>
    );
};

export default ShowPosts;
