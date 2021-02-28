import { AUTH, LOGOUT, SIGNIN, SIGNUP } from "../constants/actionTypes";

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case AUTH:
        case SIGNIN:
        case SIGNUP:
            localStorage.setItem(
                "profile",
                JSON.stringify({ ...action?.data })
            );
            return { ...state, authData: action.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;
