import React from 'react'
import OverviewFlow from '../components/App'
import { Link } from 'react-router-dom'

function tree() {
    return (
        <div>
            <div className='justify-items-stretch flex' style={{justifyContent: 'space-between'}}>
                <h4 className="justify-self-start font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Merkle Tree Structure
                </h4>
                <button className='bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'><Link to="/address">Back</Link></button>
            </div>

            <OverviewFlow />
        </div>
    )
}

export default tree
