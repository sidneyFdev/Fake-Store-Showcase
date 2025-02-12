"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const ApiProvider = ({children}) => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const fetchUserData = async () => {
        try {
            
            const response = await fetch(`${process.env.NEXT_PUBLIC_FAKE_STORE_URL}/products`)
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json()
            setApiData(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUserData();
    },[])

    return(
        <AuthContext.Provider value={{ apiData, loading, error}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAPI = () => useContext(AuthContext)

export default ApiProvider


