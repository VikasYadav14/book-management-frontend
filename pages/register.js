// import next from 'next';
import Image from 'next/image';
import { FaRegUser, FaRegEnvelope, FaRegAddressCard } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import RegisterationImg from '../public/registration.png';
import Link from 'next/link';
export default function Register() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-2/5 bg-blue-500 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12">
            <h1 className="text-3xl font-bold mb-2">BookManagement</h1>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <div>
              <Image src={RegisterationImg} alt='/'/>
            </div>
            <p className="mb-2">Have already an account?</p>
            <Link
              href="/login"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500"
            >
              Sign In
            </Link>
          </div>
          <div className="w-3/5 p-5">
            <div className="text-left font-bold text-gray-400">
              <Link href="/">
                <span className="text-blue-500">Book</span>Management
              </Link>
            </div>

            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
              <div className="flex flex-col items-center mb-3">
                <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                  <div className="bg-gray-100 mr-2">
                    <select class="select bg-gray-100 text-gray-400">
                      <option value="Title" disabled>
                        Title
                      </option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                    </select>
                  </div>
                  <div className="bg-gray-100 w-72 flex items-center">
                    <FaRegUser className="text-gray-400 m-2" />
                    <input
                      type="name"
                      name="name"
                      placeholder="Name"
                      className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
                    />
                  </div>
                </div>
                <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                  <BsTelephone className="text-gray-400 m-2" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile"
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
                  />
                </div>
                <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                  <FaRegAddressCard className="text-gray-400 m-2" />
                  <input
                    type="address"
                    name="address"
                    placeholder="Address"
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
                  />
                </div>
                <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
                  />
                </div>
                <div className="bg-gray-100 w-80 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400"
                  />
                </div>
                <Link
                  href="#"
                  className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
