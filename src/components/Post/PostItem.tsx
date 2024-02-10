import React, { useState } from 'react';
import axios from 'axios';
import { Post, PostMutation } from "../../types";

interface Props {
    post: Post;
    onDelete: (id: string) => void;
}

const PostItem: React.FC<Props> = ({ post, onDelete }) => {
    const [showFullContent, setShowFullContent] = useState(false);
    const [editing, setEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState<PostMutation>({
        title: post.title,
        text: post.text,
    });

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    const toggleEditing = () => {
        setEditing(!editing);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCurrentPost({ ...currentPost, [name]: value });
    };

    const handleSave = async () => {
        try {
            await axios.put(`/posts/${post.id}.json`, currentPost);
            setEditing(false);
        } catch (error) {
            console.error('Ошибка при обновлении поста:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post.id}.json`);
            onDelete(post.id);
        } catch (error) {
            console.error('Ошибка при удалении поста:', error);
        }
    };

    return (
        <div className="card mb-2">
            <div className="row g-0">
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">
                            {editing ? (
                                <input type="text" name="title" value={currentPost.title} onChange={handleInputChange} />
                            ) : (
                                post.title
                            )}
                        </h5>
                        <p className="card-text small">
                            {showFullContent ? post.text : post.text.slice(0, 20)}...
                        </p>
                        {showFullContent && (
                            <div className="my-4">
                                <button className="btn btn-primary ms-2" onClick={toggleEditing}>
                                    Редактировать
                                </button>
                                <button className="btn btn-danger ms-2" onClick={handleDelete}>
                                    Удалить
                                </button>
                            </div>
                        )}
                        <button className="btn btn-link" onClick={toggleContent}>
                            {showFullContent ? 'Скрыть' : 'Читать далее'}
                        </button>
                        {editing && (
                            <button className="btn btn-success" onClick={handleSave}>
                                Сохранить
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
