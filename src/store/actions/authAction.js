import {
    LOGIN_SUCCESS,
    LOGOUT,
} from "./types";

import * as authService from "../../services/authService";


export const login = (inputs, navigate) => dispatch => {
    return authService.login(inputs).then(res => {
        if (res.status) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
            localStorage.setItem('member', JSON.stringify(res.data));
            navigate("/dashboard");
        }
        return Promise.resolve(res);
    }
    );
};

export const logout = () => async (dispatch) => {
    try {
        await authService.logout();
        dispatch({
            type: LOGOUT,
        });
    } catch (error) {
        dispatch({
            type: LOGOUT,
        });
    }
};
