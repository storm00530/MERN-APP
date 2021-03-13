const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = 8000;
const router = require("./router");
const cors = require("cors");

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
