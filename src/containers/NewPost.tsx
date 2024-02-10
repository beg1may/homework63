import React from 'react';
import PostForm from "../components/PostForm/PostForm";
import {Post} from "../types";

interface Props {
    addPost: (post: Post) => void;
}

const NewPost: React.FC<Props> = ({addPost}) => {
    return (
        <div className="row">
            <div className="col-6 mx-auto mt-5">
                <PostForm onSubmit={addPost}/>
            </div>
        </div>
    );
};

export default NewPost;