import Link from 'next/link';
export default function navbar() {
  return (
    <div className='0'>
      <nav className='flex justify-center text-xl p-5 bg-gray-100'>
        <div className="text-3xl text-blue-500 font-bold text-left w-3/5">
          <Link href='/' className='p-10'>
            Book<span className='text-gray-400'>Management</span>
          </Link>
        </div>
        <ul className='flex justify-center w-2/5 gap-20 font-bold text-gray-400'>
            <li className='hover:underline'><Link href='/books'>Books</Link></li>
            <li className='hover:underline'><Link href='/login'>Login</Link></li>
            <li className='hover:underline'><a href='https://vikasyadav.vercel.app/'>About Creator</a></li>
        </ul>
      </nav>
    </div>
  );
}
