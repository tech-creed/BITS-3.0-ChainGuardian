import { useContext } from "react";
import { AuthContext } from "../context/authContext"

export const useAuthContext = ()=>{
    const context = useContext(AuthContext)
    
    if(!context){
        throw new Error('this hook must be used inside an AuthContextProvider only')
    }

    return context
}