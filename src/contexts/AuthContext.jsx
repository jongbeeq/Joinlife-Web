import { createContext, useEffect, useState } from "react";
import { addAccessToken, getAccessToken } from "../utils/local-storage";
import axios from "../configs/axios";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState()
    const [initialLoading, setInitialLoading] = useState(true);

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
        setAuthUser(res.data.user)
    }

    return (<AuthContext.Provider value={{ login, register, authUser, initialLoading }}>
        {children}
    </AuthContext.Provider>)
}

