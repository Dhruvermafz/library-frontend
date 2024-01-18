import React, { useEffect, useState } from "react";
import "./Complain";
import axios from "axios";
import Complain from "./Complain";
import { REACT_APP_API_BASE_URL } from "../../config";
const URL = `${REACT_APP_API_BASE_URL}/complain`;

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Complains = () => {
  const [complains, setComplains] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setComplains(data.complains));
  }, []);
  console.log(complains);
  return (
    <div>
      <ul>
        {complains &&
          complains.map((complain, i) => (
            <li className="complain" key={i}>
              <Complain complain={complain} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Complains;
