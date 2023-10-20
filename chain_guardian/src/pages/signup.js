import React, { useState } from 'react'
import GoogleButton from 'react-google-button'

import { useSignup } from '../hooks/useSignup'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, signUpWithGoogle, error, isPending } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
    setEmail('')
    setPassword('')
    setDisplayName('')
  }

  return (
    <div className='h-screen flex bg-gray-bg1'>
    <div className='w-full max-w-md m-auto bg-indigo-600 rounded-lg shadow-default py-10 px-16'>
        <h1 className='text-2xl font-medium text-white mt-4 mb-12 text-center'>
            Sign UP 🔐
        </h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email' className='text-white'>Name</label>
                <input
                    type='text'
                    className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='name'
                    placeholder='Your Name'
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </div>
            <div>
                <label htmlFor='password' className='text-white'>Email</label>
                <input
                    type='email'
                    className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='email'
                    placeholder='Your Password'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor='password' className='text-white'>Password</label>
                <input
                    type='password'
                    className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='password'
                    placeholder='Your Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div className='flex justify-center items-center mt-6'>
            {isPending ? <button  className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`} disabled>Loading..</button> : <button  className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}>Signup</button>}
            </div>
            <div className='text-white flex justify-center'>
              Already have an account? {" "}<a className='text-black' href="signin">Clickhear...</a>
            </div>
            {error && <div className="error">{error}</div>}
        <div className="google-auth-button flex justify-center p-2">
          <div className='google-btn'>
            <GoogleButton onClick={() => signUpWithGoogle()} />
          </div>
        </div>
        </form>
    </div>
</div>

  )
}

export default Signup
