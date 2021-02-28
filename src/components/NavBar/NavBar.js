import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    AppBar,
    Avatar,
    Button,
    ButtonBase,
    Toolbar,
    Typography,
} from "@material-ui/core";
import decode from "jwt-decode";
import useStyles from "./styles";
import blueSquid from "../../images/blue-squid.png";
import Splatune from "../../music/Splatune";

const NavBar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const logout = () => {
        dispatch({ type: "LOGOUT" });
        history.push("/");
        setUser(null);
    };
    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);
    console.log("user:", user);
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    component={Link}
                    to="/"
                    variant="h3"
                    className={classes.heading}
                    align="left"
                >
                    Welcome to Inkopolis
                </Typography>
                <img
                    src={blueSquid}
                    alt="blue squid"
                    className={classes.image}
                    height="90px"
                />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            alt={user.result.username}
                            src={user.result.imageUrl}
                        >
                            {user.result.username.charAt(0)}
                        </Avatar>
                        <Typography
                            className={classes.userName}
                            variant="body1"
                        >
                            {user.result.username.split(" ")[0]}
                        </Typography>
                        <ButtonBase
                            variant="contained"
                            onClick={logout}
                            className={classes.getFont}
                        >
                            log out
                        </ButtonBase>
                    </div>
                ) : (
                    <>
                        <div></div>
                        <Link className={classes.getFont} to="/auth">
                            <h4>sign in</h4>
                        </Link>
                    </>
                )}
            </Toolbar>
            <Splatune />
        </AppBar>
    );
};

export default NavBar;
