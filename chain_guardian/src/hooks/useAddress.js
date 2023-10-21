import { useState } from "react" 

const useAddress = () => {
  const [error, setError] = useState(null) 
  const [data, setData] = useState(null) 
  const [isLoading, setIsLoading] = useState(false) 

  const getChain = async (address) => {
    setError(null) 
    setIsLoading(true) 

    try {
      const response = await fetch(`/api/addressValidator/${address}`) 
      const json = await response.json() 
      console.log(json) 

      if (!response.ok) {
        setError(json.error) 
        return { chain: null, error: json.error } 
      } else {
        setError(null) 
        setData(json) 
        localStorage.setItem(chain_on_txn,json.chain)
        return { chain: json.chain, error: null } 
      }
    } catch (error) {
      setError("An error occurred while fetching data.") 
      return { chain: null, error: "An error occurred while fetching data." } 
    } finally {
      setIsLoading(false) 
    }
  } 

  return { error, data, getChain, isLoading } 
} 

export default useAddress 
