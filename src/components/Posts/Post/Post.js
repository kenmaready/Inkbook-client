import React from "react";
import { useDispatch } from "react-redux";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    CircularProgress,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/posts";
import useStyles from "./styles";
import defaultImg from "../../../images/blue-squid.png";
import { ThumbUpAltOutlined } from "@material-ui/icons";

export default function Post({ post, setCurrentId }) {
    const user = JSON.parse(localStorage.getItem("profile"));
    const classes = useStyles();
    const dispatch = useDispatch();

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find(
                (like) => like === (user?.result?.googleId || user?.result?._id)
            ) ? (
                <>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp;
                    {post.likes.length > 2
                        ? `You and ${post.likes.length - 1} others`
                        : `${post.likes.length} like${
                              post.likes.length > 1 ? "s" : ""
                          }`}
                </>
            ) : (
                <>
                    <ThumbUpAltOutlined fontSize="small" />
                    &nbsp;{post.likes.length}{" "}
                    {post.likes.length === 1 ? "Like" : "Likes"}
                </>
            );
        }

        return (
            <>
                <ThumbUpAltOutlined fontSize="small" />
                &nbsp;Like
            </>
        );
    };

    const handleClick = () => {
        setCurrentId(post._id);
    };
    const handleDelete = () => {
        dispatch(deletePost(post._id));
    };
    const handleLike = () => {
        dispatch(likePost(post._id));
    };

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={post.selectedFile || defaultImg}
                title={post.title}
            />
            <div className={classes.overlay}>
                <Typography className={classes.title} gutterBottom>
                    {post.title}
                </Typography>
                <br />
                <Typography variant="body2">{post.name}</Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            {(user?.result?.googleId === post?.creator ||
                user?.result?._id === post?.creator) && (
                <div className={classes.overlay2}>
                    <Button
                        style={{ color: "white" }}
                        size="small"
                        onClick={handleClick}
                    >
                        <MoreHorizIcon fontSize="small" />
                    </Button>
                </div>
            )}

            <CardContent>
                <Typography
                    className={classes.title}
                    variant="body1"
                    gutterBottom
                >
                    {post.message}
                </Typography>
                <div className={classes.details}>
                    <Typography variant="body2">
                        {post.tags.map((tag) => `#${tag} `)}
                    </Typography>
                </div>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    className={classes.icons}
                    onClick={handleLike}
                    disabled={!user?.result}
                >
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator ||
                    user?.result?._id === post?.creator) && (
                    <Button
                        size="small"
                        className={classes.icons}
                        onClick={handleDelete}
                    >
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
