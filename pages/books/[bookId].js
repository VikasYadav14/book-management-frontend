import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BookImg from '../../public/book1.png';
import useSWR from 'swr';

export default function ViewBooks() {
  const { bookId } = useRouter().query;
  console.log(bookId);

  const [bookData, setBookData] = useState([]);

  useEffect((bookId) => {
    if (!bookData) {
      fetch(`book/${bookId}`)
      .then((response) => response.json())
      .then((output) => {
      setBookData(output.data);
      });
    }});

  // const bookData = data.data
  // const {_id, title, excerpt, userId, ISBN, category, subcategory, reviews, isDeleted, releasedAt, createdAt, updatedAt, reviewsData}=book

  console.log();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="flex justify-center w-2/5 bg-blue-500 rounded-tl-2xl rounded-bl-2xl">
            <Image src={BookImg} className="m-5" alt="/" />
          </div>
          <div className="text-gray-400 w-3/5 p-5">
            <div className="text-left font-bold text-gray-400">
              <Link href="/">
                <span className="text-blue-500">Book</span>Management{' '}
              </Link>
            </div>
            <h2 className="text-3xl text-blue-500 font-bold uppercase">
              {/* {bookData.title} */}
            </h2>
            <div className="border-2 border-blue-500 inline-block w-36 m-2"></div>
            <p></p>
            <div className="px-6 pt-4 pb-2 text-white">
              <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                {/* Category: {bookData.category} */}
              </span>
              <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                {/* Release: {bookData.releaseAt} */}
              </span>
              <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                {/* Review: {bookData.reviews} */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
