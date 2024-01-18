import React, { useEffect, useState } from "react";
import "./Author.css";
import axios from "axios";
import Author from "./Author";
import { REACT_APP_API_BASE_URL } from "../../config";

const fetchHandler = async () => {
  return await axios.get(REACT_APP_API_BASE_URL).then((res) => res.data);
};

const Authors = () => {
  const [authors, setAuthors] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setAuthors(data.authors));
  }, []);
  console.log(authors);
  return (
    <div>
      <ul>
        {authors &&
          authors.map((author, i) => (
            <li className="author" key={i}>
              <Author author={author} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Authors;
