const express = require("express");
const app = express();
const corsMiddleware = require("cors");
const jsonParser = express.json();
const si = require("systeminformation");

const PORT = 3000;

app.use(corsMiddleware());
app.use(jsonParser);


app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
