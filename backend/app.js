const express = require("express");
const mongoose = require("mongoose");
const bookrouter = require("./routes/book-routes");
const chatogaryrouter = require("./routes/chatogary-routes");
const authorrouter = require("./routes/author-routes");
const complainrouter = require("./routes/complains-routes");
const dotenv = require("dotenv");
const cors = require("cors");
/* App Config */
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/books", bookrouter);
app.use("/chatogary", chatogaryrouter);
app.use("/author", authorrouter);
app.use("/complain", complainrouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to the database"))
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));

//mongo user name->admin
//mongo password->st4b8CGTzFSKlBBv
//e3QkUwNmd5WwuZFF

app.get("/", (req, res) => {
  res.status(200).send("Welcome to LibraryApp");
});

/* Port Listening In */
app.listen(port, () => {
  console.log(`Server is running in PORT ${port}`);
});
