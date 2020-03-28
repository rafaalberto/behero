const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

const port = 4000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`running at port ${port}`));
