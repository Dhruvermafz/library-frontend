import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
import { REACT_APP_API_BASE_URL } from "../../config";

const fetchHandler = async () => {
  return await axios.get(REACT_APP_API_BASE_URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li className="book" key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
