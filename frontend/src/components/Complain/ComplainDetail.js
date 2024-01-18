import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import { REACT_APP_API_BASE_URL } from "../../config";
const ComplainDetail = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`${REACT_APP_API_BASE_URL}/complain/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.complain));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`${REACT_APP_API_BASE_URL}/complain/${id}`, {
        name: String(inputs.name),
        complainss: String(inputs.complainss),
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
    sendRequest().then(() => history("/complain"));
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
            <FormLabel>Complain</FormLabel>
            <TextField
              value={inputs.complainss}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="complainss"
            />
            <Button variant="contained" type="submit">
              Update Complain
            </Button>
          </Box>
        </form>
      )}
      ;
    </div>
  );
};

export default ComplainDetail;
