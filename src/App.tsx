import React, {useState} from 'react';
import Appbar from "./components/Appbar/Appbar";
import {Post} from "./types";
import Home from "./containers/Home";
import NewPost from "./containers/NewPost";
import OnAboutUs from "./containers/OnAboutUs";
import OnContact from "./containers/OnContact";
import {Route, Routes} from "react-router-dom";

const App = () => {
    const [posts, setPosts] = useState<Post[]>([
        {id: '1', title: 'Title', text: 'Text'}
    ]);

    const addPost = (post: Post) => {
        setPosts(prevState => [...prevState, post]);
    };


    return (
        <>
            <header>
                <Appbar />
            </header>
            <main className="container-fluid">
                <Routes>
                    <Route path="/" element={(
                        <Home posts={posts} />
                    )} />
                    <Route path="/new-post" element={(
                        <NewPost addPost={addPost} />
                    )} />
                    <Route path="/о" element={(
                        <OnAboutUs />
                    )} />
                    <Route path="/contacts" element={(
                        <OnContact />
                    )} />
                    <Route path="*" element={
                        <h1>Not found!</h1>
                    } />
                </Routes>
            </main>
        </>
    );
};

export default App;