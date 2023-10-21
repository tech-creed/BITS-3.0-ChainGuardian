import React, { useState } from 'react'

import { useLogin } from '../hooks/useLogin'
import GoogleButton from 'react-google-button'

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loginWithGoogle, error, isPending } = useLogin()


  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    setEmail('')
    setPassword('')
  }
    return (
      <div className='h-screen flex bg-gray-bg1'>
      <div className='w-full max-w-md m-auto bg-indigo-600 rounded-lg shadow-default py-10 px-16'>
          <h1 className='text-2xl font-medium text-white mt-4 mb-12 text-center'>
              Log in to your account 🔐
          </h1>

          <form onSubmit={e=>handleSubmit(e)}>
              <div>
                  <label htmlFor='email' className='text-white'>Email</label>
                  <input
                      type='email'
                      className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder='Your Email'
                  />
              </div>
              <div>
                  <label htmlFor='password' className='text-white'>Password</label>
                  <input
                      type='password'
                      className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password} size="lg"
                      placeholder='Your Password'
                  />
              </div>

              <div className='flex justify-center items-center mt-6'>
                {isPending ? <button  className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`} disabled>Loading..</button> : <button  className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}>Signin</button>}
              </div>
              <div className='text-white flex justify-center'>
                You don't have an account? <a className='text-black' href="signup">Click Here !!!</a>
              </div>
              {error && <div className="error">{error}</div>}
            <div className="flex justify-center pt-3 google-auth-button">
              <div className='google-btn'>
                <GoogleButton onClick={() => loginWithGoogle()} />
              </div>
            </div>
          </form>
      </div>
  </div>
    )
  }

  export default Signin
