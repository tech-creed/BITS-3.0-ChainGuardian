import { useState } from "react"

const useTransaction = () => {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const getTransaction = async (chain,address) => {
        setError(null)

        const response = await fetch(`/api/transData/${chain}/${address}`)
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
    return { error, data, getTransaction }
}

export default useTransaction