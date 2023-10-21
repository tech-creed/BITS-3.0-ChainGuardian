import { useEffect, useState } from "react"
import { firebaseAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
import {signOut} from 'firebase/auth'

export const useLogout = () => {
    const [isCancelled, setCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setPending(true)

        // sign the user out
        try {
            await signOut(firebaseAuth).then(() => {console.log('logout successful' )}).catch((error) => {
                throw new Error('could not complete logout process')
            })
            // dispatch logout action
            dispatch({ type: 'LOGOUT' })

            // update states
            if (!isCancelled) {
                setPending(false)
                setError(null)
            }
        } catch (err) {
            if (!isCancelled) {
                setError(err.message)
                setPending(false)
            }

        }
    }
    useEffect(()=>{
        return ()=>setCancelled(true)
    },[])
    return { error, isPending, logout }
}
