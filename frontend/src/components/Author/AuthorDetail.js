import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import { REACT_APP_API_BASE_URL } from "../../config";

const AuthorDetail = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`${REACT_APP_API_BASE_URL}/author/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.author));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8080/author/${id}`, {
        name: String(inputs.name),
        language: String(inputs.language),
      })
      .then((res) => res.data);
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/author"));
  };
  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="auto"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Language</FormLabel>
            <TextField
              value={inputs.language}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="language"
            />
            <Button variant="contained" type="submit">
              Update Author
            </Button>
          </Box>
        </form>
      )}
      ;
    </div>
  );
};

export default AuthorDetail;
