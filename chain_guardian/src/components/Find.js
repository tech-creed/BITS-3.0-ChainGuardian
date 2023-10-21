import {useState} from 'react'
const Find = ({handleSubmit}) => {
    const [chain, setChain] = useState(null)
  const [txnId, setTxnId] = useState(null)
    return (
        <div className='w-full pt-4 bg-gray-bg1'>
            <div className='w-full rounded-lg shadow-default'>
                <form onSubmit={(e)=> {e.preventDefault(); handleSubmit(chain,txnId)}} className="grid grid-cols-10 gap-4">
                    <div className="grid grid-cols-8 gap-4 col-span-8">
                        <input
                            onChange={(e)=>{setTxnId(e.target.value)}}
                            value={txnId}
                            type='text'
                            className={`w-full col-span-6 p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='txn_id'
                            placeholder='enter transaction id'
                        />
                        <select data-te-select-init onClick={(e)=>setChain(e.target.value)} className="w-full col-span-2 p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4">
                            <option value="bitcoin">Bitcoin</option>
                            <option value="litecoin">Litecoin</option>
                            <option value="dogecoin">Dogecoin</option>
                            <option value="dash">Dash</option>
                            <option value="ethereum">Ethereum</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <button className='w-full bg-indigo-600 p-2 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'>Find</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Find;