import {Link} from 'react-router-dom'
import '../public/crypto/css/dashboard.css'
import Navbar from '../components/navbar'

const Dashboard = () => {
    return (
        <><Navbar/>
            <div class="grid">
                <Link to='/address'>
                    <div class="card">
                        <span class="icon">
                            <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round" className="bi bi-cash" viewBox="0 0 24 24">
                                <path d="M0 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2z" />
                                <path d="M0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7z" />
                                <path d="M1 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V10H1v.5z" />
                                <path d="M6 16a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6zM0 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H0V9z" />
                            </svg>
                        </span>
                        <h4>Analyze Wallet Addresses</h4>
                        <p>Gain detailed insights into cryptocurrency wallet addresses by providing a public address for a specific coin. Our system offers comprehensive information, including transaction history, balances, and associated activities, ensuring you stay informed and secure through in-depth wallet analysis.</p>
                    </div>
                </Link>
                <Link to='/transaction'>
                <div class="card">
                    <span class="icon">

                        <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" className="bi bi-wallet" viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M1 0.5a.5.5 0 0 1 .5.5V4h13V1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3H1v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5h2zM0 6v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V6H0z" />
                        </svg>
                    </span>
                    <h4>Transaction Analysis</h4>
                    <p>Analyze the cryptocurrency transactions with our powerful analysis tools. Enter a transaction ID, and ChainGuardian reveals sender and receiver data, transaction history, confirmations, and more, making the complexities of your crypto transactions easily understandable
                    </p>
                </div>
                </Link>
                
            </div>
        </>
    )
}

export default Dashboard