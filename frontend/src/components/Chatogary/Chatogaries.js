import React, { useEffect, useState } from "react";
import "./Chatogary.css";
import axios from "axios";
import Chatogary from "./Chatogary";
import { REACT_APP_API_BASE_URL } from "../../config";
const URL = `${REACT_APP_API_BASE_URL}/chatogary`;

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Chatogaries = () => {
  const [chatogaries, setChatogaries] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setChatogaries(data.chatogaries));
  }, []);
  console.log(chatogaries);
  return (
    <div>
      <ul>
        {chatogaries &&
          chatogaries.map((chatogary, i) => (
            <li className="chatogary" key={i}>
              <Chatogary chatogary={chatogary} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Chatogaries;
