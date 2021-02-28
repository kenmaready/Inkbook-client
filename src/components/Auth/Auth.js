import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    Avatar,
    Button,
    ButtonBase,
    Container,
    Grid,
    Link,
    Paper,
    Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";
import Input from "./Input";
import Icon from "./icon";
import { signup, signin } from "../../actions/auth";
import useStyles from "./styles";

const initialFormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            if (formData.password != formData.confirmPassword) {
                return console.log("Passwords do not match. Please try again.");
            }
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };
    const googleSuccess = (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        result.username = result.name;
        delete result.name;
        dispatch({ type: "AUTH", data: { result, token } });
        history.push("/");
    };
    const googleFailure = () => {
        console.log("Google signin was unsuccessful.");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className={classes.getFont} variant="h4">
                    {isSignup ? "sign up" : "sign in"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={0}>
                        {isSignup && (
                            <Input
                                name="username"
                                label="username"
                                type="text"
                                handleChange={handleChange}
                                autoFocus
                                className={classes.inputField}
                            />
                        )}
                        <>
                            <Input
                                name="email"
                                label="email"
                                type="email"
                                handleChange={handleChange}
                                className={classes.inputField}
                            />
                            <Input
                                name="password"
                                label="password"
                                type={showPassword ? "text" : "password"}
                                handleChange={handleChange}
                                handleShowPassword={handleShowPassword}
                                className={classes.inputField}
                            />
                        </>
                        {isSignup && (
                            <Input
                                name="confirmPassword"
                                label="confirm password"
                                type={showPassword ? "text" : "password"}
                                handleChange={handleChange}
                                handleShowPassword={handleShowPassword}
                                className={classes.inputField}
                            />
                        )}
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        fullwidth="true"
                        className={classes.button}
                    >
                        {isSignup ? "sign up" : "sign in"}
                    </Button>
                    <Grid container justify="center">
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            render={(renderProps) => {
                                return (
                                    <Button
                                        className={classes.googleButton}
                                        onClick={renderProps.onClick}
                                        variant="contained"
                                        startIcon={<Icon />}
                                    >
                                        sign in with Google
                                    </Button>
                                );
                            }}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiesPolicy="single_host_origin"
                        />
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item />
                        <Grid item xs={8}>
                            <ButtonBase
                                className={classes.getFont}
                                onClick={switchMode}
                            >
                                {isSignup
                                    ? "Already have an inkbook account? Sign in."
                                    : "Don`t have an inkbook account yet? Sign up?"}
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
