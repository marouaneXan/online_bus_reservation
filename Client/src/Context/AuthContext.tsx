import {createContext} from 'react'
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext(null)

const AuthContextProvider=({children}:any)=>{

    const name:string="marouane"
    const values={name}
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider