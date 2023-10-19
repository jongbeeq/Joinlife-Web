import { createContext, useEffect, useState } from "react";
import { addAccessToken, getAccessToken, removeAccessToken } from "../utils/local-storage";
import axios from "../configs/axios";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState()
    const [initialLoading, setInitialLoading] = useState(true);
    const [confirmLogin, setConfirmLogin] = useState(null)

    useEffect(() => {
        if (getAccessToken()) {
            axios
                .get('/auth/me')
                .then(res => {
                    setAuthUser(res.data.user);
                })
                .finally(() => {
                    setInitialLoading(false);
                });
        } else {
            setInitialLoading(false);
        }
    }, []);

    const login = async credential => {
        const res = await axios.post('/auth/login', credential);
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
    };

    const register = async registerInputObject => {
        const res = await axios.post('/auth/register', registerInputObject)
        addAccessToken(res.data.accessToken);
        setConfirmLogin(res.data.user)
        return res
    }

    const toHomePage = async (confirmLogin) => {
        setAuthUser(confirmLogin)
    }

    const logout = () => {
        removeAccessToken()
        setAuthUser(null)
    }

    return (<AuthContext.Provider value={{ login, logout, register, toHomePage, confirmLogin, authUser, initialLoading, setAuthUser }}>
        {children}
    </AuthContext.Provider>)
}

