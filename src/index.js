const express = require("express");
const cors = require("cors");
const app = express();

const User = require("./classes/User");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/users", User.listAll);
app.post("/users", User.add);

app.listen(3000, () => {
  console.log("API running!");
});
