import * as api from "../api";
import { SIGNIN, SIGNUP } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
    console.log("Here's what dispatch looks like:");
    console.log(dispatch);
    try {
        const { data } = await api.signin(formData);
        dispatch({ type: SIGNIN, data });
        history.push("/");
    } catch (err) {
        console.log(err);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);
        dispatch({ type: SIGNUP, data });
        history.push("/");
    } catch (err) {
        console.log(err);
    }
};
