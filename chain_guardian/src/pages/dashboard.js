import React, { useContext, useState } from 'react'

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

import Navbar from '../components/navbar'

const Dashboard = () => {
    const [chain, setChain] = useState(null)
    const [address, setAddress] = useState(null)
    const [err, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(false)

    const [isAddressValid, setAddressValid] = useState(false)

    return (
        <>
        <Navbar/>
        <div className='w-full pt-4 bg-gray-bg1'>
            <div className='w-full rounded-lg shadow-default'>
                <form onSubmit={()=>{}} className="grid grid-cols-10 gap-4">
                    <div className="col-span-8">
                        <input
                            type='text'
                            className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='chain_address'
                            placeholder='enter chain address'
                            onChange={(e) => setAddress(e.target.value)}
                                value={address}
                        />
                    </div>
                    <div className="col-span-2">
                    {(isAddressValid !== true) && isPending ? <button className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`} disabled>Loading..</button> : <button className='w-full bg-indigo-600 p-2 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'>Find</button>}
                    </div>
                </form>
            </div>
            {err && <div className="error">{err}</div>}
                        {isAddressValid && <div class='error'>Could not fetch the details for this address</div>}
        </div>

        {data && <><Card className="mt-6 w-full bg-white rounded-lg p-10">
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
                
                <CardFooter className="ransition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 pt-0 mt-5 bg-indigo-600 rounded-md w-48">
                    <a href="/tree" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center text-white gap-2">
                        Node Visualize
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button>
                    </a>
                </CardFooter>
            </Card></>}
            <div className='text-sky-500 text-2xl underline-offset-1 pt-4'>Recent Transactions</div>
            {data && Object.entries(data.detailTransactions).map((single) =>{ return <TransSingleSection key={single} data={single}/> })}
        </>
    )
}
 
export default Dashboard;