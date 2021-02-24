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
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { deletePost, likePost } from "../../../actions/posts";
import useStyles from "./styles";
import defaultImg from "../../../images/blue-squid.png";

export default function Post({ post, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();

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
                <Typography variant="body2">{post.creator}</Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: "white" }}
                    size="small"
                    onClick={handleClick}
                >
                    <MoreHorizIcon fontSize="small" />
                </Button>
            </div>

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
                >
                    <ThumbUpAltIcon fontSize="small" />
                    Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button
                    size="small"
                    className={classes.icons}
                    onClick={handleDelete}
                >
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
