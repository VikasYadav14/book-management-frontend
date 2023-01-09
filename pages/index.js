import MainImg from '../public/registration.png';
import Image from 'next/image';
import Book from './books';

export default function Main() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ">
      <div className="flex items-center justify-center w-full flex-1 px-20 text-center">
        <div className=" text-white w-3/5 max-w-4xl py-36">
          <div className="text-gray-400 font-bold text-5xl m-2">
              <span className="text-blue-500">Book</span>Management
          </div>
          <div className="border-2 w-48 border-blue-500 inline-block mb-2"></div>
          <p className='text-blue-500 text-3xl font-bold'>Your Online Book Management Libraray</p>
          <a
              href="register"
              className="m-8 border-2 border-blue-500 bg-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500"
            >
              Sign Up
            </a>
            <p className="mb-2 text-gray-400">Have already an account? <a href='login' className='font-bold text-blue-500 hover:underline'> Sign In</a></p>
        </div>
        <dv className="flex w-2/5">
          <Image src={MainImg} alt='/'/>
        </dv>
      </div>
    </section>
  );
}
