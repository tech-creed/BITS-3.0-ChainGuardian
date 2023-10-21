import { useState } from "react"

const useAddress = () => {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const getChain = async (address) => {
        setError(null)

        const response = await fetch(`/api/addressValidator/${address}`)
        const json = await response.json()
        console.log(json)
        if (!response.ok) {
            setData(null)
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setData(json)
        }
    }
    return { error, data, getChain }
}

export default useAddress