import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const defaultPostData = {
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
};

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue((value) => value + 1);
}

export default function Form({ currentId, setCurrentId }) {
    const [postData, setPostData] = useState(defaultPostData);
    const user = JSON.parse(localStorage.getItem("profile"));
    const classes = useStyles();
    const dispatch = useDispatch();
    const forceUpdate = useForceUpdate();
    const post = useSelector((state) =>
        currentId ? state.posts.find((p) => p._id === currentId) : null
    );

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setPostData(defaultPostData);
        setCurrentId(null);
        // TODO: Figure out how to clear filename from FileBase Component
    };
    const handleChange = (e) => {
        if (e.target.name != "tags") {
            setPostData({ ...postData, [e.target.name]: e.target.value });
        } else if (e.target.name === "tags") {
            setPostData({
                ...postData,
                tags: e.target.value.split(","),
            });
        }
    };
    const handleFileSelected = ({ base64 }) => {
        setPostData({ ...postData, selectedFile: base64 });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const enhancedPostData = {
            ...postData,
            name: user?.result?.username,
        };
        if (currentId) {
            dispatch(updatePost(currentId, enhancedPostData, clear));
        } else {
            dispatch(createPost(enhancedPostData, clear));
        }

        if (!user?.result?.username) {
            return (
                <Paper className={classes.paper}>
                    <Typography variant="h6" align="center">
                        Please sign in to post and like splats
                    </Typography>
                </Paper>
            );
        }
    };

    return (
        <Paper className={classes.paper}>
            <form
                className={`${classes.root} ${classes.form}`}
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
            >
                <Typography variant="h5" className={classes.headline}>
                    {currentId ? "Edit your splat!" : "Create a splat!"}
                </Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="title"
                    className={classes.formInput}
                    fullWidth
                    value={postData.title}
                    onChange={handleChange}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="message"
                    className={classes.formInput}
                    fullWidth
                    value={postData.message}
                    onChange={handleChange}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="tags"
                    className={classes.formInput}
                    fullWidth
                    value={postData.tags}
                    onChange={handleChange}
                />
                <div className={classes.fileInput}>
                    Add an image:
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={handleFileSelected}
                    ></FileBase>
                </div>
                <Button
                    variant="contained"
                    className={classes.buttonSubmit}
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    className={classes.buttonCancel}
                    variant="contained"
                    size="small"
                    fullWidth
                    onClick={clear}
                >
                    Clear Form
                </Button>
            </form>
        </Paper>
    );
}
