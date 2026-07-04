import { createContext, useContext, useState , useEffect } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {

    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null;
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const login = (userData)=> {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, login , logout }}>
            {children}
        </UserContext.Provider>
    );
}

export default function useUser(){
    return useContext(UserContext)
}