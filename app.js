const express = require("express");
const app = express();
const cors = require("cors");
const Controller = require("./controllers/controller");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/login", Controller.login);
app.listen(port, () => console.log(`working on port ${port}`));
