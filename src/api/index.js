import axios from "./axios";

export const fetchPosts = () => {
    return axios.get("posts");
};

export const createPost = (newPost) => {
    return axios.post("posts", newPost);
};

export const updatePost = (currentId, updatedPost) => {
    return axios.patch(`posts/${currentId}`, updatedPost);
};

export const deletePost = (currentId) => {
    return axios.delete(`posts/${currentId}`);
};

export const likePost = (currentId) => {
    return axios.post(`posts/like/${currentId}`);
};
