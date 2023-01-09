import next from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLock, MdLockOutline } from 'react-icons/md';
export default function Login() {
 const [user,setUser] = useState({email:'',password:''})

let name,value
const handleInputs = (e)=>{
  console.log(e)
  name = e.target.name
  value = e.target.value

  setUser({...user,[name]:value})
}

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-gray-400">
              <Link href="/">
                <span className="text-blue-500">Book</span>Management{' '}
              </Link>
            </div>
            <div className="py-20">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleInputs}
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInputs}
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
                  />
                </div>
                <Link
                  href="#"
                  className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h1 className="text-3xl font-bold mb-2">Hello, Friend!</h1>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us
            </p>
            <Link
              href="/register"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
