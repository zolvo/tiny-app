const express = require("express");
const app = express();
const mongoose = require("mongoose");

const db = require("./config/keys").mongoURI;
const questions = require("./routes/api/questions");

app.use(express.json())

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo's a gogo"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("This Works!"));
app.use("/api/questions", questions);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is serving on port ${port}`));
