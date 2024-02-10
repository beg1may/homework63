import React, {useState} from 'react';
import {Post, PostMutation} from "../../types";

interface Props {
    onSubmit: (post: Post) => void;
}

const PostForm: React.FC <Props> = ({onSubmit}) => {
    const [post, setPost] = useState<PostMutation>({
        title: '',
        text: '',
    });

    const changePost = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPost(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onForSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...post,
        })
    }

    return (
        <form onSubmit={onForSubmit}>
            <h4>Add new post</h4>
            <div className="form-group">
                <label htmlFor="title"> Title </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    value={post.title}
                    onChange={changePost}
                />
            </div>
            <div className="form-group">
                <label htmlFor="text"> Text </label>
                <textarea
                    name="text"
                    id="text"
                    className="form-control"
                    value={post.text}
                    onChange={changePost}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Create</button>
        </form>
    );
};

export default PostForm;