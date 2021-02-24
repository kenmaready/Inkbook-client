import React from "react";
import { AppBar, Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

export default function Posts({ setCurrentId }) {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.titleCard}>
                <h1>Get the latest splats...</h1>
            </div>
            {!posts.length ? (
                <CircularProgress />
            ) : (
                <Grid className={classes.container} container spacing={3}>
                    {posts.map((p) => (
                        <Grid key={p._id} item xs={12} sm={6}>
                            <Post post={p} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
}
