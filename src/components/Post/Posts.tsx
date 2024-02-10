import React from 'react';
import PostItem from "./PostItem";
import {Post} from "../../types";

interface Props {
    posts: Post[];
    onDelete: (id: string) => void;
}

const Posts: React.FC <Props> = ({posts, onDelete}) => {
    return (
        <div>
            <h4>Posts</h4>
            {posts.map(post => (
                <PostItem
                key={post.id}
                post={post}
                onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default Posts;