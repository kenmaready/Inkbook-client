import * as api from "../api";
import {
    CREATE,
    UPDATE,
    DELETE,
    FETCH_ALL,
    LIKE,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (err) {
        console.log(err.message);
    }
};

export const createPost = (newPost, cb) => async (dispatch) => {
    try {
        const { data } = await api.createPost(newPost);
        dispatch({ type: CREATE, payload: data });
        cb();
    } catch (err) {
        console.log(err.message);
    }
};

export const updatePost = (currentId, updatedPost, cb) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(currentId, updatedPost);
        dispatch({ type: UPDATE, payload: data });
        cb();
    } catch (err) {
        console.log(err.message);
    }
};

export const deletePost = (currentId) => async (dispatch) => {
    try {
        await api.deletePost(currentId);
        dispatch({ type: DELETE, payload: currentId });
    } catch (err) {
        console.log(err.message);
    }
};

export const likePost = (currentId) => async (dispatch) => {
    try {
        const { data } = await api.likePost(currentId);
        dispatch({ type: LIKE, payload: data });
    } catch (err) {
        console.log(err.message);
    }
};
