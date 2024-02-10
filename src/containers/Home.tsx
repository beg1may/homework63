import React from 'react';
import Posts from "../components/Post/Posts";
import {Post} from "../types";

interface Props {
    posts: Post[];
}

const Home: React.FC <Props> = ({posts}) => {
    return (
        <div className="row">
            <div className="col-6 mt-5 mx-auto">
                <Posts posts={posts}/>
            </div>
        </div>
    );
};

export default Home;