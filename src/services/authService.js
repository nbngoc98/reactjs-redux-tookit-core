import * as api from "./index";

const csrf = () => api.httpGet('sanctum/csrf-cookie');

export const login = async params => {
    await csrf();
    console.log("params", params);
    return await api.httpPost('/api/login', params);
}

export const logout = async () => {
    return await api.httpPost('/api/logout');
}
