import { useState } from "react"
import { firebaseAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"
import { GoogleAuthProvider,signInWithRedirect,getRedirectResult,createUserWithEmailAndPassword } from "firebase/auth"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(false)
    const { dispatch } = useAuthContext()
    const provider = new GoogleAuthProvider()

    const signup = async (email, password, displayName) => {
        setError(null)
        setPending(true)
        const abortController = new AbortController()

        try {
            const res = await createUserWithEmailAndPassword(firebaseAuth, email, password)
            if (!res) {
                throw new Error('could not complete signup')
            }

            // await res.user.updateProfile({ displayName })
            
            dispatch({ type: 'LOGIN', payload: res.user })
            
            if (!abortController.signal.aborted) {
                setPending(false)
                setError(null)
            }
        } catch (err) {
            if (!abortController.signal.aborted) {
                setError(err.message)
                setPending(false)
            }
        }
        return () => {
            abortController.abort()
        }
    }
    const signUpWithGoogle = async () => {
        setError(null)
        setPending(true)
        const abortController = new AbortController()

        signInWithRedirect(firebaseAuth,provider)
            .then((res) => {
                dispatch({ type: 'LOGIN', payload: res.user })

                if (!abortController.signal.aborted) {
                    setPending(false)
                    setError(null)
                }

            }).catch((err) => {
                if (!abortController.signal.aborted) {
                    setError(err.message)
                    setPending(false)
                }
            })
            const userCred = await getRedirectResult(firebaseAuth)
            console.log(userCred)
            return () => {
                abortController.abort()
            }
    }

    return { error, isPending, signup, signUpWithGoogle }
}