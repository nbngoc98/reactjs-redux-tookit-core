import {

    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../actions/types";

const initialState = {
    currentUser: null,
    isLoading: false,
    errorMessage: "",
};

export default function auth(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                isLoading: false,
                errorMessage: "",
            };
        case LOGIN_FAIL:
            return {
                ...state,
                currentUser: null,
                isLoading: false,
                errorMessage: "",
            };
        case LOGOUT:
            return {
                ...state,
                currentUser: null,
                isLoading: false,
                errorMessage: "",
            };
        default:
            return {
                ...state,
            };
    }
}
