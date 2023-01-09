import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import img from '../../public/book.png';

import useSWR from 'swr';
import { useEffect, useState } from 'react';

export default function Books() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    fetch(`/book`)
      .then((response) => response.json())
      .then((output) => {
        setBooksList(output.data);
      });
  }, []);

  console.log(booksList);

  return (
    <section>
      <div className="px-20 py-20 bg-gray-100">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 bg-white rounded-2xl">
          {/* <!--Card 1--> */}
          {booksList.length > 0 &&
            booksList.map((idx) => (
              <div
                key={idx._id}
                className="overflow-hidden shadow-lg rounded-2xl border-2 border-blue-500"
              >
                <Link href={`/books/${idx._id}`}>
                  <div className="w-full bg-gray-100">
                    <Image className="w-full h-64" src={img} alt="/"></Image>
                  </div>
                  <div className="bg-blue-500 text-white ">
                    <div className="px-6 py-4 ">
                      <div className="font-bold text-xl m-2">{idx.title}</div>
                      <p className="m-2">{idx.excerpt}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                        Category : {idx.category}
                      </span>
                      <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                        Release : {idx.releasedAt}
                      </span>
                      <span className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                        Review : {idx.reviews}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
