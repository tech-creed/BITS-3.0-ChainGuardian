import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react" 
import { RocketLaunchIcon } from "@heroicons/react/24/solid" 
import { ArrowLongRightIcon } from "@heroicons/react/24/outline" 

import '../public/crypto/css/addressPage.css'

import useAddress from '../hooks/useAddress'
import TransSingleSection from '../components/singleTransaction'
import Navbar from '../components/navbar'

const AddressPage = () => {
    const [chain, setChain] = useState(null)
    const [address, setAddress] = useState(null)
    const [err, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(false)
    const { error, data: chainName, getChain,isLoading } = useAddress()

    const [isAddressValid, setAddressValid] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault() 
    
        if (!isLoading) {
          const chainResponse = await getChain(address) 
    
          if (chainResponse.error) {
            setPending(false) 
            setAddressValid(true) 
            setError(chainResponse.error) 
          } else {
            // Proceed with the second fetch
            const response = await fetch(`/api/addressData/${chainResponse.chain}/${address}`) 
            const json = await response.json() 
            console.log(json) 
    
            if (!response.ok) {
              setPending(false) 
              setData(null) 
              setError(json.error) 
            } else {
              setPending(false) 
              setError(null) 
              setData(json) 
              localStorage.setItem('chain', chainResponse.chain) 
              localStorage.setItem('address', address) 
            }
          }
        }
      } 

    return (
        <>
        <Navbar/>
        <div className='addressPage'>
        <div className='w-full pt-4'>
            <h1 className='text-3xl font-bold text-yellow-400'>Enter the Wallet Address:</h1>
            <div className='w-full rounded-lg'>
                <form onSubmit={handleSubmit} className="grid grid-cols-10 gap-4">
                    <div className="col-span-8">
                        <input
                            type='text'
                            className={` text-black w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='chain_address'
                            placeholder='enter chain address'
                            style={{ height: '100%' }}
                            onChange={(e) => setAddress(e.target.value)}
                                value={address}
                        />
                    </div>
                    <div className="col-span-2">
                    {(isAddressValid !== true) && isPending ? <button style={{ height: '100%' }} className={`bg-indigo-600 py-2 px-4 text-sm  text-white  rounded border border-green focus:outline-none focus:border-green-dark`} disabled>Loading..</button> : <button className='w-full bg-indigo-600 p-2 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'>Find</button>}
                    </div>
                </form>
            </div>
            {err && <div className="error">{err}</div>}
                        {isAddressValid && <div class='error'>Could not fetch the details for this address</div>}
        </div>

        {data && <><Card className="mt-6 text-black w-full bg-white rounded-lg p-10">
                <CardBody>
                    <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
                    <Typography className='grid grid-rows-6 grid-flow-col gap-4'>
                        <div className="font-semibold">Address ID</div>
                        <div>{data.address}</div>
                     <div className="font-semibold">detected Chain</div>
                     <div>{data.detectedChain}</div>
                     <div className="font-semibold">balance USD</div>
                     <div>{data.balanceUSD}</div>
                     <div className="font-semibold">balance Coin</div>
                      <div>{data.balanceETH}</div>
                     <div className="font-semibold">send USD</div>
                     <div>{data.sendUSD}</div>
                     <div className="font-semibold">received USD</div>
                     <div>{data.receivedUSD}</div>
                     <div className="font-semibold">first Received</div>
                      <div>{data.firstReceived}</div>
                      <div className="font-semibold">transaction Count</div>
                      <div>{data.transactionCount}</div>
                      <div className="font-semibold">last Received</div>
                      <div>{data.lastReceived}</div>
                      <div className="font-semibold">first Send</div>
                      <div>{data.firstSend}</div>
                      <div className="font-semibold">last Send</div>
                      <div>{data.lastSend}</div>
                    </Typography>
                </CardBody>
                
                <CardFooter className="ransition text-black ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 pt-0 mt-5 bg-indigo-600 rounded-md w-48">
                    <Link href="/tree" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center text-white gap-2">
                        Node Visualize
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button>
                    </Link>
                </CardFooter>
            </Card></>}
        <div className='text-sky-500 text-2xl underline-offset-1 pt-4'>Recent Transactions</div>
            {data && Object.entries(data.detailTransactions).map((single) =>{ return <TransSingleSection key={single} data={single}/> })}
        </div>
        </>
    )
}
 
export default AddressPage 