import React from "react";
import { useLoaderData } from "react-router-dom";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);

  return <div className="my-container">
    <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 ">
        {
            books.map(book => (
                <div className="overflow-hidden relative">
                    <img src={book.image} className="object-cover w-full h-56 md:h-64 xl:h-80" alt="book cover page" />

                    <div className="bg-black text-gray-300 bg-opacity-75 absolute inset-0">
                        <p>{book.title}</p>
                        <br />
                        <p>{book.subtitle}</p>
                        <br />
                        <p>Price: {book.price}</p>
                    </div>
                </div>
            ))
        }
    </div>
  </div>;
};

export default Books;