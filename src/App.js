import React from "react";
import { browserRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import useStyles from "./styles";

const App = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <Container className={classes.wholePage}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
